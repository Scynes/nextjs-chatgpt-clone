import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Chats {
    chats: Chat[];
    removeChat: (uuid: string) => void;
    addChat: (title: string, uuid: string) => void;
}

interface Chat {
    title: string;
    uuid: string;
}

export const useChatsStore = create<Chats>()(
    persist(
        (set) => ({
            chats: [],
            removeChat: (uuid: string) => set((state) => ({
                chats: state.chats.filter(chat => chat.uuid !== uuid)
            })),
            addChat: (title: string, uuid: string) => set((state) => ({
                chats: [ ...state.chats, { title, uuid } ]
            }))
        }),
        {
            name: 'chat-store'
        }
    )
)