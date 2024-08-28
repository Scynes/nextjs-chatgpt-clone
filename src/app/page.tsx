import { Grid } from '@radix-ui/themes';
import { ChatWindow } from '@/components/shared/chat-window';

export default function Page() {

    return (
        <Grid rows={ '1fr auto' } className={ 'h-full px-3 pb-5' }>
            <ChatWindow />
        </Grid>
    );
}