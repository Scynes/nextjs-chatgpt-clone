'use client';

import { Box, Button, Flex, Text } from '@radix-ui/themes';
import { IoAdd } from "react-icons/io5";
import { useLayoutStore } from '@/stores/use-layout-store';
import { ToggleSidebarButton } from './toggle-sidebar-button';
import { SidebarActions } from './sidebar-actions';
import { useChatsStore } from '@/stores/use-chats-store';
import { MdOutlineChat } from "react-icons/md";
import Link from 'next/link';

export const Sidebar = () => {

    const { sidebarExpanded } = useLayoutStore();

    const { uuids } = useChatsStore();
    
    return (
        <Flex direction={ 'column' } className={ `h-full transition-all ${ sidebarExpanded ? 'w-[260px]' : 'w-0' } overflow-hidden row-span-2 border-r border-[--gray-6]` }>
            <Flex direction={ 'column' } className={ 'h-full w-[260px] px-3 pb-3' }>
            <Box>
                <Flex className={ 'h-14' } align={ 'center' }>
                    <ToggleSidebarButton />
                </Flex>
            </Box>
            <Button size={ '3'} radius={ 'large' } className={ 'gap-2' } highContrast>
                    <IoAdd size={ '1.5rem' }/>
                    <Text>New Chat</Text>
            </Button>
            <Flex direction={ 'column' } className={ 'h-full mt-4 gap-2' }>
                { uuids.map(uuid => (
                    <Button asChild key={ uuid } size={ '3' } radius={ 'large' } variant={ 'outline' } className={ 'justify-start items-center' }>
                        <Link key={ uuid } href={ `/${uuid}` }>
                        <MdOutlineChat size={ '1.25rem' } />
                        { uuid }
                        </Link>
                    </Button>
                )) }
            </Flex>
            <SidebarActions />
            </Flex>
        </Flex>
    );
}