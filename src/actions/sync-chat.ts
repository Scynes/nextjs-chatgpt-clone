'use server';

import { Chat } from '@/models/chat';
import { CoreMessage } from 'ai';

export const syncChat = async (messages: CoreMessage[], chatId: string) => {
    
    await Chat.findOneAndUpdate({ key: chatId }, { messages }).exec();
}