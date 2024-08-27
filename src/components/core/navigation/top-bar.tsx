import { Flex, Heading } from '@radix-ui/themes';
import { ToggleSidebarButton } from './toggle-sidebar-button';

export const TopBar = () => {
    return (
        <Flex className={ 'h-14 px-[11px]' }>
            <Flex align={ 'center' }>
                <ToggleSidebarButton />
            </Flex>
        </Flex>
    );
}