'use client';

import { useLayoutStore } from '@/stores/use-layout-store';
import { Button } from '@radix-ui/themes';

import Image from 'next/image';

export const ToggleSidebarButton = () => {

    const { toggleSidebarExpanded } = useLayoutStore();

    return (
        <Button onClick={ toggleSidebarExpanded } size={ '1' } className={ 'w-6 h-6 p-2 m-0 rounded-lg cursor-pointer' } variant={ 'ghost' }>
            <Image src={ '/images/icons/side-bar.svg' } alt={ 'Logo' } width={ 24 } height={ 24 } />
        </Button>
    );
}