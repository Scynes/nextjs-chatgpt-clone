import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, Grid, Theme } from '@radix-ui/themes';

import "./globals.css";
import '@radix-ui/themes/styles.css';
import { SideBar } from '@/components/core/navigation/side-bar';
import { TopBar } from '@/components/core/navigation/top-bar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ChatGPT",
    description: "AI Chatbot clone."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Theme accentColor={ 'gray' }>
                    <Grid columns={ 'auto 1fr' } rows={ 'auto 1fr' } className={ 'h-dvh' }>
                        <SideBar />
                        <TopBar />
                        <Box>
                            { children }
                        </Box>
                    </Grid>
                </Theme>
            </body>
        </html>
    );
}