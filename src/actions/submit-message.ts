'use server';

import OpenAI from 'openai';

export const submitMessage = async (prompt: string) => {

    const openai = new OpenAI({
        apiKey: process.env.NEXT_PRIVATE_OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({

        model: "gpt-3.5-turbo",

        messages: [
            { role: "user", content: prompt }
        ]
    });

    console.log(completion.choices[0].message.content);
}