import { Box, Container, styled } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
    children: JSX.Element;
}

const Main = styled('main')(({ theme }) => ({
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3)
    },
    [theme.breakpoints.down('md')]: {
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1)
    }
}));
function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <Container sx={{ py: 3 }}>{children}</Container>
            <Footer />
        </>
    );
}

export default Layout;
