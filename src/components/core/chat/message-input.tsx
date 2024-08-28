'use client';

import { Flex, IconButton  } from '@radix-ui/themes';
import { useEffect, useRef, useState } from 'react';
import { IoArrowUp } from "react-icons/io5";

export const MessageInput = ({ onSubmit }: { onSubmit: (message: string) => void }) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const [ message, setMessage ] = useState<string>('');

    const handleInput = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = '20px';
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    }

    const handleSubmit = () => {

        if (!textAreaRef.current) return;

        onSubmit(message.trim());
        setMessage('');
    }
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            if (message.trim().length !== 0) handleSubmit();
        }
    }

    useEffect(() => {
        if (message === '') {
            handleInput();
        }
    }, [ message ]);

    return (
        <Flex className={ 'flex-1 p-2 bg-[--accent-3] rounded-3xl' } align={ 'center' }>
            <textarea onInput={ handleInput } onKeyDown={ handleKeyDown } value={ message } onChange={ e => setMessage(e.target.value) } ref={ textAreaRef } placeholder={ 'Message ChatGPT' } className={ 'h-6 ml-4 max-h-52 w-full !border-none !outline-none !focus:border-none !focus:outline-none resize-none bg-[--accent-3]' } />
            <IconButton onClick={ handleSubmit } size={ '2' } radius={ 'full' } className={ 'self-end cursor-pointer active:scale-95 transition-all' } highContrast>
                <IoArrowUp size={ '1.5rem' }/>
            </IconButton>
        </Flex>
    );
}