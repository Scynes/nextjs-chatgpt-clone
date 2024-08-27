import { Button, Flex, Text } from '@radix-ui/themes';

export const ChatExampleButton = ( { children }: { children: React.ReactNode }) => {
    return (
        <Button variant={ 'outline' } className={ 'flex-col max-w-40 min-w-40 block h-auto rounded-2xl py-3 cursor-pointer' }>
            <Flex className={ 'flex-1 min-h-16' } direction={ 'column' } gap={ '3' } justify={ 'between' }>
                { children }
            </Flex>
        </Button>
    );
}