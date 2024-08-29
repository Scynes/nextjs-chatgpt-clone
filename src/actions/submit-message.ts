'use server';

import { createStreamableValue } from 'ai/rsc';
import { CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { Chat } from '@/models/chat';

export async function submitMessage(messages: CoreMessage[], chatId: string) {

    const exists = await Chat.exists({ key: chatId });
    console.log(exists);

    if (!exists) {
        console.log('Creating new chat');
        const newChat = await Chat.create({ key: chatId, messages });
        (await newChat).save();
    }

    const updateChat = await Chat.findOneAndUpdate({ key: chatId }, { messages });
    (await updateChat).save();
    
    const result = await streamText({
        model: openai('gpt-4'),
        messages,
    });

    const stream = createStreamableValue(result.textStream);

    return stream.value;
}