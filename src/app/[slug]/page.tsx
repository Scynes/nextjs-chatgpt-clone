import { ChatWindow } from '@/components/shared/chat-window';
import { Grid } from '@radix-ui/themes';

export default async function Page ( { params }: { params: { slug: string } } ) {
    return (
        <Grid rows={ '1fr auto' } className={ 'h-full px-3 pb-5' }>
            <ChatWindow />
        </Grid>
    );
}