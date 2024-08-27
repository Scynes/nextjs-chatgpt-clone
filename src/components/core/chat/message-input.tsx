'use client';

import { Flex, IconButton  } from '@radix-ui/themes';
import { useRef } from 'react';
import { IoArrowUp } from "react-icons/io5";

export const MessageInput = () => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = '20px';
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    }
    
    return (
        <Flex className={ 'flex-1 p-2 bg-[--accent-3] rounded-3xl' } align={ 'center' }>
            <textarea onInput={ handleInput } ref={ textAreaRef } placeholder={ 'Message ChatGPT' } className={ 'h-6 ml-4 max-h-52 w-full !border-none !outline-none !focus:border-none !focus:outline-none resize-none bg-[--accent-3]' } />
            <IconButton size={ '2' } radius={ 'full' } className={ 'self-end cursor-pointer active:scale-95 transition-all' } highContrast>
                <IoArrowUp size={ '1.5rem' }/>
            </IconButton>
        </Flex>
    );
}