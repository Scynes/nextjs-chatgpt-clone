'use client';

import { Box, Button, Flex, Text } from '@radix-ui/themes';
import { IoAdd } from "react-icons/io5";
import { useLayoutStore } from '@/stores/use-layout-store';
import { ToggleSidebarButton } from './toggle-sidebar-button';
import { SidebarActions } from './sidebar-actions';
import { useChatsStore } from '@/stores/use-chats-store';
import { MdOutlineChat } from "react-icons/md";
import { usePathname } from 'next/navigation';

import Link from 'next/link';

export const Sidebar = () => {

    const { sidebarExpanded } = useLayoutStore();

    const { chats } = useChatsStore();

    const PATH_NAME = usePathname();

    console.log(PATH_NAME);
    
    return (
        <Flex direction={ 'column' } className={ `h-full transition-all ${ sidebarExpanded ? 'w-[260px]' : 'w-0' } overflow-hidden row-span-2 border-r border-[--gray-6]` }>
            <Flex direction={ 'column' } className={ 'h-full w-[260px] px-3 pb-3' }>
            <Box>
                <Flex className={ 'h-14' } align={ 'center' }>
                    <ToggleSidebarButton />
                </Flex>
            </Box>
            <Button asChild size={ '3'} radius={ 'large' } className={ 'gap-2' } highContrast>
                <Link href={ '/' }>
                    <IoAdd size={ '1.5rem' }/>
                    <Text>New Chat</Text>
                </Link>
            </Button>
            <Flex direction={ 'column' } className={ 'h-full mt-4 gap-2 overflow-y-scroll no-scrollbar' }>
                { chats.map(chat => (
                    <Button asChild key={ chat.uuid } size={ '3' } radius={ 'large' } variant={ PATH_NAME == `/${ chat.uuid }` ? 'solid' : 'outline' } className={ 'justify-start items-center' } highContrast={ PATH_NAME == `/${ chat.uuid }` }>
                        <Link href={ `/${ chat.uuid }` }>
                            <MdOutlineChat size={ '1.25rem' } />
                            { chat.title }
                        </Link>
                    </Button>
                )) }
            </Flex>
            <SidebarActions />
            </Flex>
        </Flex>
    );
}