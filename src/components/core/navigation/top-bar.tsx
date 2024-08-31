'use client';

import { Callout, Flex, Box, Container, Link } from '@radix-ui/themes';
import { ToggleSidebarButton } from './toggle-sidebar-button';
import { useLayoutStore } from '@/stores/use-layout-store';
import { TbInfoTriangle } from "react-icons/tb";

export const TopBar = () => {

    const { sidebarExpanded } = useLayoutStore();

    return (
        <Flex className={ 'min-h-14 px-[11px] flex-col' }>
            <Flex align={ 'center' } className={ `h-14 ${ sidebarExpanded ? 'hidden' : 'flex' } border-b` }>
                <ToggleSidebarButton />
            </Flex>
            <Container size={ '3' } py={ '2' } className={ 'flex-1 sm:px-4' } >
                <Flex justify={ 'center' }>
                    <Callout.Root size={ '1' } variant={ 'surface' } color={ 'amber' }>
                        <Callout.Icon>
                            <TbInfoTriangle />
                        </Callout.Icon>
                        <Callout.Text size={ '1' }>
                            Be aware that if the chat fails to load, this is currently a problem with how vercel limits API streaming on Hobby tier plans. 
                        </Callout.Text>
                        <Callout.Text size={ '1' }>
                            You can also <Link href={ '/' }>fork the project</Link> and deploy locally.
                        </Callout.Text>
                    </Callout.Root>
                </Flex>
            </Container>
        </Flex>
    );
}