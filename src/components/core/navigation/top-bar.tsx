'use client';

import { Flex } from '@radix-ui/themes';
import { ToggleSidebarButton } from './toggle-sidebar-button';
import { useLayoutStore } from '@/stores/use-layout-store';

export const TopBar = () => {

    const { sidebarExpanded } = useLayoutStore();

    return (
        <Flex className={ 'h-14 px-[11px]' }>
            <Flex align={ 'center' } className={ `${ sidebarExpanded ? 'hidden' : 'flex' }` }>
                <ToggleSidebarButton />
            </Flex>
        </Flex>
    );
}