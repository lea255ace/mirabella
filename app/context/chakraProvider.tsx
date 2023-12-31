'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme, theme as base } from '@chakra-ui/react';
import React from 'react';

const theme = extendTheme( {
    styles: {
        global: {
            body: {
                bg: '#f8f8f8'
            }
        }
    },
    fonts: {
        heading: `Times New Roman, ${base.fonts?.heading}`,
        body: `Times New Roman, ${base.fonts?.body}`,
    },
    components: {
        Link: {
            baseStyle: {
                textColor: 'purple.500',
                textDecoration: 'underline'
            }
        }
    }
});

export function UIProvider({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    );
}
