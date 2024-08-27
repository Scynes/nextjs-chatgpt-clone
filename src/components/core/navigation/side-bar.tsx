'use client';

import { Box, Button, Flex, Text } from '@radix-ui/themes';
import { IoAdd } from "react-icons/io5";
import { useLayoutStore } from '@/stores/use-layout-store';
import { ToggleSidebarButton } from './toggle-sidebar-button';

export const Sidebar = () => {

    const { sidebarExpanded } = useLayoutStore();
    
    return (
        <Flex direction={ 'column' } className={ `h-full transition-all ${ sidebarExpanded ? 'w-[260px] px-3' : 'w-0 px-0' } overflow-hidden row-span-2 border-r border-[--gray-6]` }>
            <Box>
                <Flex className={ 'h-14' } align={ 'center' }>
                    <ToggleSidebarButton />
                </Flex>
            </Box>
            <Flex direction={ 'column' } className={ 'h-full' }>
                <Button size={ '3'} radius={ 'large' } className='gap-2' highContrast>
                    <IoAdd size={ '1.5rem' }/>
                    <Text>New Chat</Text>
                </Button>
            </Flex>
        </Flex>
    );
}