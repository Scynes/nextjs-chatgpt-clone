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

export default function Page() {

    const [ messages, setMessages ] = useState<string[]>([]);

    const EXAMPLES = [
        { title: <IoSchoolOutline size={ '1.5rem' } className={ 'text-[--indigo-9]' } />, description: 'Teach me about Next.JS.' },
        { title: <IoListOutline size={ '1.5rem' } className={ 'text-[--tomato-9]' } />, description: 'Make me a recipe with chicken and pesto.' },
        { title: <HiOutlineLightBulb size={ '1.5rem' } className={ 'text-[--orange-9]' } />, description: 'Fun fact about TypeScript.' },
        { title: <GoPencil size={ '1.5rem' } className={ 'text-[--jade-9]' } />, description: 'Write a short story about fluffy cats.' },
    ];

    return (
        <Grid rows={ '1fr auto' } className={ 'h-full px-3 pb-5' }>
            <Container maxWidth={ '770px' } className='self-center' asChild>
                <Flex direction={ 'column' } align={ 'center' } justify={ 'center' }>
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
                </Flex>
            </Container>
            <Box>
                <Container maxWidth={ '770px' }>
                    <MessageInput />
                </Container>
            </Box>
        </Grid>
    );
}