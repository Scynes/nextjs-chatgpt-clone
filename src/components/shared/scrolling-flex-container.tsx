'use client';

import { Flex, FlexProps } from '@radix-ui/themes';
import { useEffect, useRef } from 'react';

/**
 * A Radix UI Flex wrapper that automatically scrolls to the bottom when new children are added.
 * Mimics the behavior of a chat window.
 */
export const ScrollingFlexContainer = ({ children, ...props }: FlexProps) => {
    const flexContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = flexContainerRef.current;

        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [ children ]); // Scroll to bottom when children change

    return (
        <Flex ref={ flexContainerRef } { ...props }>
            { children }
        </Flex>
    );
}
