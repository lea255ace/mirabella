import React from 'react';
import { UIProvider } from 'context/chakraProvider';
import { InstrumentProvider } from 'context/instrumentProvider';
import { StyleProvider } from 'context/styleProvider';

//TODO(MW): Seems like this should be in page.js, but can't go there until it's converted to a server component.
export const metadata = {
    title: 'Mirabella',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <UIProvider>
                    <StyleProvider>
                        <InstrumentProvider>
                            {children}
                        </InstrumentProvider>
                    </StyleProvider>
                </UIProvider>
            </body>
        </html>
    );
}
