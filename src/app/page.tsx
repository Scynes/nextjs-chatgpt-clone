import { MessageInput } from '@/components/core/chat/message-input';
import { Box, Container, Flex, Grid } from '@radix-ui/themes';

export default function Page() {
    return (
        <Grid rows={ '1fr auto' } className={ 'h-full px-3 pb-5' }>
            <Flex>
                Hello
            </Flex>
            <Box>
                <Container size={ '2' }>
                    <MessageInput />
                </Container>
            </Box>
        </Grid>
    );
}