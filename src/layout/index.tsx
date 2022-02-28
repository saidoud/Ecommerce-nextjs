import { Container } from '@mui/material';
import React from 'react';
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
                <Container sx={{ pt: 2 }}>{children}</Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
