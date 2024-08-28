'use client';

import { ChatExampleButton } from '@/components/core/chat/chat-example-button';
import { MessageInput } from '@/components/core/chat/message-input';
import { Box, Container, Flex, Grid, Text } from '@radix-ui/themes';
import { IoSchoolOutline, IoListOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoPencil } from "react-icons/go";
import { useState } from 'react';

import Image from 'next/image';
import { submitMessage } from '@/actions/submit-message';
import { Message } from '@/types/message';

export default function Page() {

    const [ messages, setMessages ] = useState<Message[]>([]);

    const handleMessageSubmit = async (message: string) => {
        setMessages( prev => [ ...prev, { role: 'user', content: message} ] );
        const response = await submitMessage(message);
        setMessages( prev => [ ...prev, { role: 'system', content: response } ] );
    }

    const EXAMPLES = [
        { title: <IoSchoolOutline size={ '1.5rem' } className={ 'text-[--indigo-9]' } />, description: 'Teach me about Next.JS.' },
        { title: <IoListOutline size={ '1.5rem' } className={ 'text-[--tomato-9]' } />, description: 'Make me a recipe with chicken and pesto.' },
        { title: <HiOutlineLightBulb size={ '1.5rem' } className={ 'text-[--orange-9]' } />, description: 'Fun fact about TypeScript.' },
        { title: <GoPencil size={ '1.5rem' } className={ 'text-[--jade-9]' } />, description: 'Write a short story about fluffy cats.' },
    ];

    return (
        <Grid rows={ '1fr auto' } className={ 'h-full px-3 pb-5' }>
            <Container maxWidth={ '770px' } asChild>
                <Flex direction={ 'column' } justify={ messages.length > 0 ? undefined : 'center' } className={ 'h-full overflow-y-scroll pb-8' }>
                    <Box className={ `${ messages.length > 0 && 'hidden' }` }>
                        <Image src={ '/images/logo.svg' } width={ 50 } height={ 50 } alt={ 'ChatGPT Logo' } className={ 'mx-auto' } />
                        <Flex gap={ '4' } px={ '2' } mt={ '8' } wrap={ 'wrap' } justify={ 'center' }>
                            { EXAMPLES.map((example, index) => (
                                <Box key={ index } onClick={ () => submitMessage(example.description) }>
                                    <ChatExampleButton>
                                        <Box className={ 'mx-auto' }>
                                            { example.title }
                                        </Box>
                                        <Text size={ '1' } className={ 'text-[--gray-9]' }>
                                            { example.description }
                                        </Text>
                                    </ChatExampleButton>
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                    { messages.map((message, index) => (
                        <Box key={ index } className={ `${ message.role === 'user' && 'bg-[--accent-3] sm:max-w-[70%] ml-auto w-fit block' } flex gap-3 p-4 rounded-3xl mt-4` }>
                            { message.role === 'system' && 
                                <Box>
                                    <Flex justify={ 'center' } align={ 'center' } className={ 'border border-[--gray-5] rounded-full p-1 min-w-8 min-h-8' }>
                                        <Image src={ '/images/logo.svg' } width={ 18 } height={ 18 } alt={ 'ChatGPT Logo' } />
                                    </Flex>
                                </Box>
                            }
                            <Text size={ '2' } className={ `whitespace-pre-wrap ${ message.role === 'system' && 'mt-[6px]' }` }>
                                { message.content }
                            </Text>
                        </Box>
                    )) }
                </Flex>
            </Container>
            <Box>
                <Container maxWidth={ '770px' }>
                    <MessageInput onSubmit={ handleMessageSubmit }/>
                </Container>
            </Box>
        </Grid>
    );
}