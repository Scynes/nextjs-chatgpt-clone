'use server'

import { Chat } from '@/models/chat'

export const getChat = async (chatId: string) => {
    const chat = await Chat.findOne({ key: chatId }).exec();

    return chat?.messages || [];
}