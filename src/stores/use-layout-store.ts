import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Layout {
    sidebarExpanded: boolean;
    toggleSidebarExpanded: () => void;
}

export const useLayoutStore = create<Layout>()(
    persist(
        (set) => ({
            sidebarExpanded: true,
            toggleSidebarExpanded: () => set( state => ({ sidebarExpanded: !state.sidebarExpanded }))
        }),
        {
            name: 'layout-store',
        }
    )
);