import { submitMessage } from '@/actions/submit-message';
import { useChatsStore } from '@/stores/use-chats-store';
import { CoreMessage } from 'ai';
import { readStreamableValue } from 'ai/rsc';
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

    // Handle the message submission from the user.
    const handleMessageSubmit = async (message: string) => {

        let currentChatId = chatId;

        if (!currentChatId) {
            currentChatId = uuid();
            addChat(currentChatId);
        }

        const newMessages: CoreMessage[] = [ ...messages, { content: message, role: 'user' } ];

        setMessages(newMessages);

        // Call the server action to submit the message to ChatGPT.
        const result = await submitMessage(newMessages, currentChatId);

        for await (const content of readStreamableValue(result)) {
            setMessages([ ...newMessages, { role: 'assistant', content: content as string } ]);
        }
    }

    return { messages, handleMessageSubmit };
}