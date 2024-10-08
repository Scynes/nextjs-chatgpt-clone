'use client';

import { Box, Container, Flex, Text } from '@radix-ui/themes';
import { ScrollingFlexContainer } from '@/components/shared/scrolling-flex-container';
import { useChatMessages } from '@/hooks/use-chat-messages';
import { ChatExampleButton } from '@/components/core/chat/chat-example-button';
import { EXAMPLES } from '@/constants/examples';

import Image from 'next/image';
import { MessageInput } from '../core/chat/message-input';
import { CoreMessage } from 'ai';

export const ChatWindow = ({ chatId, messages: _messages }: { chatId?: string, messages?: CoreMessage[] }) => {

    const { messages, handleMessageSubmit } = useChatMessages(_messages || [], chatId);

    return (
        <>
            <Container maxWidth={ '770px' } asChild>
                <ScrollingFlexContainer direction={ 'column' } justify={ messages.length > 0 ? undefined : 'center' } className={ 'h-full overflow-y-scroll pb-8 scroll-smooth' }>
                    <Box className={ `${ messages.length > 0 && 'hidden' }` }>
                        <Image src={ '/images/logo.svg' } width={ 50 } height={ 50 } alt={ 'ChatGPT Logo' } className={ 'mx-auto' } />
                        <Flex gap={ '4' } px={ '2' } mt={ '8' } wrap={ 'wrap' } justify={ 'center' }>
                            { EXAMPLES.map((example, index) => (
                                <Box key={ index } onClick={ () => handleMessageSubmit(example.description) }>
                                    <ChatExampleButton>
                                        <Box className={ 'mx-auto' }>
                                            <example.icon size={ '1.5rem' } className={ `text-[${ example.color }]` } />
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
                            { message.role !== 'user' && 
                                <Box>
                                    <Flex justify={ 'center' } align={ 'center' } className={ 'border border-[--gray-5] rounded-full p-1 min-w-8 min-h-8' }>
                                        <Image src={ '/images/logo.svg' } width={ 18 } height={ 18 } alt={ 'ChatGPT Logo' } />
                                    </Flex>
                                </Box>
                            }
                            <Text size={ '2' } className={ `whitespace-pre-wrap ${ message.role !== 'user' && 'mt-[6px]' }` }>
                                { message.content as string }
                            </Text>
                        </Box>
                    )) }
                </ScrollingFlexContainer>
            </Container>
            <MessageInput onSubmit={ handleMessageSubmit }/>
        </>
    );
}