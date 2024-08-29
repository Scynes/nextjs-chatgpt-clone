import { submitMessage } from '@/actions/submit-message';
import { syncChat } from '@/actions/sync-chat';
import { useChatsStore } from '@/stores/use-chats-store';
import { CoreMessage } from 'ai';
import { readStreamableValue } from 'ai/rsc';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

/**
 * A hook to handle chat messages and interactions with ChatGPT.
 * 
 * @param initialMessages The initial messages (loaded from mongoDB).
 */
export const useChatMessages = (initialMessages: CoreMessage[] = [], chatId?: string) => {

    // State that holds messages between the user and the assistant.
    const [ messages, setMessages ] = useState<CoreMessage[]>(initialMessages);

    const { addChat } = useChatsStore();

    const router = useRouter();

    let currentChatId = chatId;

    // Handle the message submission from the user.
    const handleMessageSubmit = async (message: string) => {

        const MAX_LENGTH_TITLE = 20;

        const TITLE = message.length > MAX_LENGTH_TITLE ? message.substring(0, MAX_LENGTH_TITLE) : message;

        if (!currentChatId) {
            currentChatId = uuid();
            addChat(TITLE, currentChatId);
            window.history.pushState({}, "", currentChatId);
        }

        const newMessages: CoreMessage[] = [ ...messages, { content: message, role: 'user' } ];

        setMessages(newMessages);

        // Call the server action to submit the message to ChatGPT.
        const result = await submitMessage(newMessages, currentChatId);

        let finalMessage: CoreMessage | null = null;

        for await (const content of readStreamableValue(result)) {
            finalMessage = { role: 'assistant', content: content as string };
            setMessages([ ...newMessages, { role: 'assistant', content: content as string } ]);
        }

        if (finalMessage !== null) {
            await syncChat([ ...newMessages, finalMessage ], currentChatId);
        }

        router.push(currentChatId);
    }

    return { messages, handleMessageSubmit };
}