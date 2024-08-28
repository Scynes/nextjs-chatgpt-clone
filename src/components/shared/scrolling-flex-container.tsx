'use client';

import { Flex, FlexProps } from '@radix-ui/themes';
import { useEffect, useRef } from 'react';

/**
 * A Radix UI Flex wrapper that automatically scrolls to the bottom when new children are added.
 * Mimics the behavior of a chat window.
 */
export const ScrollingFlexContainer = ( { children, ...props }: FlexProps ) => {

    const flexContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = flexContainerRef.current;

        if (container) {
            const observer = new MutationObserver(() => {
                container.scrollTop = container.scrollHeight;
            });

            observer.observe(container, {
                childList: true,
                subtree: true, // Also observe changes in nested elements
            });

            return () => {
                observer.disconnect();
            };
        }
    }, []);

    return (
        <Flex ref={ flexContainerRef } {...props}>
            { children }
        </Flex>
    );
}