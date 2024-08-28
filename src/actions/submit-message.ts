'use server';

import { createStreamableValue } from 'ai/rsc';
import { CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { Chat } from '@/models/chat';

export async function submitMessage(messages: CoreMessage[]) {

    const newChat = Chat.create({ messages });
    (await newChat).save();
    
    const result = await streamText({
        model: openai('gpt-4'),
        messages,
    });

    const stream = createStreamableValue(result.textStream);

    return stream.value;
}