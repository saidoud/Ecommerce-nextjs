// material-ui
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// third-party
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

import { theme } from 'theme';

const clientSideEmotionCache = createCache({ key: 'css', prepend: true });
const generateClassName = createGenerateClassName({
    productionPrefix: 'c'
});

function MyApp(props: any) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    return (
        <StylesProvider injectFirst generateClassName={generateClassName}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </StylesProvider>
    );
}

export default appWithTranslation(MyApp);
