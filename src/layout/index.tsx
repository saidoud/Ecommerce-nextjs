import { Container } from '@mui/material';
import React from 'react';
import AppContainer from './AppContainer';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
    children: JSX.Element;
}
function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>
                <Container>{children}</Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
