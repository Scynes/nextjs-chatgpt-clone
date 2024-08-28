'use server';

import OpenAI from 'openai';

export const submitMessage = async (prompt: string): Promise<string> => {

    const openai = new OpenAI({
        apiKey: process.env.NEXT_PRIVATE_OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({

        model: 'gpt-4',

        messages: [
            { role: "user", content: prompt }
        ],
    });

    return completion.choices[0].message.content || 'There was an error processing the request, please try again.';
}