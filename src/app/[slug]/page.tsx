import { getChat } from '@/actions/get-chat';
import { ChatWindow } from '@/components/shared/chat-window';
import { Grid } from '@radix-ui/themes';

export default async function Page ( { params }: { params: { slug: string } } ) {

    const messages = await getChat(params.slug);

    return (
        <Grid rows={ '1fr auto' } className={ 'h-full px-3 pb-5' }>
            <ChatWindow chatId={ params.slug } messages={ messages }/>
        </Grid>
    );
}