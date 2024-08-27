import { Button, Flex, Text } from '@radix-ui/themes';
import { IoTrashOutline, IoPersonOutline, IoExitOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

export const SidebarActions = () => {
    return (
        <Flex direction={ 'column' } className={ 'flex-1 pt-3 border-t border-[--gray-6]' }>
            <Button size={ '3' } className={ 'justify-start m-0 cursor-pointer' } variant={ 'ghost' }>
                <IoTrashOutline size={ '1rem' }/>
                <Text size={ '2' }>Clear Conversations</Text>
            </Button>
            <Button size={ '3' } className={ 'justify-start m-0 cursor-pointer' } variant={ 'ghost' }>
                <IoPersonOutline size={ '1rem' }/>
                <Text size={ '2' }>My Account</Text>
            </Button>
            <Button size={ '3' } className={ 'justify-start m-0 cursor-pointer' } variant={ 'ghost' }>
                <FiExternalLink size={ '1rem' }/>
                <Text size={ '2' }>Updates & FAQ</Text>
            </Button>
            <Button size={ '3' } className={ 'justify-start m-0 cursor-pointer' } variant={ 'ghost' }>
                <IoExitOutline size={ '1rem' }/>
                <Text size={ '2' }>Log Out</Text>
            </Button>
        </Flex>
    );
}