import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, Grid, Theme } from '@radix-ui/themes';
import { Sidebar } from '@/components/core/navigation/sidebar';
import { TopBar } from '@/components/core/navigation/top-bar';

import '@radix-ui/themes/styles.css';
import "./globals.css";
import { connect } from '@/lib/database';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ChatGPT",
    description: "AI Chatbot clone."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    connect();

    return (
        <html lang="en">
            <body className={inter.className}>
                <Theme grayColor={ 'slate' } accentColor={ 'gray' }>
                    <Grid columns={ 'auto 1fr' } rows={ 'auto 1fr' } className={ 'h-dvh' }>
                        <Sidebar />
                        <TopBar />
                        <Box className='h-full overflow-y-scroll'>
                            { children }
                        </Box>
                    </Grid>
                </Theme>
            </body>
        </html>
    );
}