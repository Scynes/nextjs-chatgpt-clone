import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Chats {
    uuids: string[];
    removeChat: (uuid: string) => void;
    addChat: (uuid: string) => void;
}

export const useChatsStore = create<Chats>()(
    persist(
        set => ({
            uuids: [],
            removeChat: (uuid: string) => set(state => ({ uuids: state.uuids.filter(u => u !== uuid) })),
            addChat: (uuid: string) => set(state => ({ uuids: [ ...state.uuids, uuid ] }))
        }),
        {
            name: 'chat-store'
        }
    )
)