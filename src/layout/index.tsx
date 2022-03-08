import React from 'react';
import { Container } from '@mui/material';
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
                <Container sx={{ py: 4 }}>{children}</Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
