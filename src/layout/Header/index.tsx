import React, { useState } from 'react';
import { AppBar, ButtonBase, Link, Toolbar, Box, OutlinedInput, InputAdornment, Stack, IconButton, Badge } from '@mui/material';

// next-js
import { useRouter } from 'next/router';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// project-import
import Cart from 'components/cart';

function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [cartOpen, setCartOpen] = useState(false);
    const router = useRouter();

    const handleOpen = () => {
        setCartOpen(true);
    };
    const handleClose = () => {
        setCartOpen(false);
    };

    const handleKeywordKeyPress: React.KeyboardEventHandler = (e) => {
        if (e.key === 'Enter') router.push('/search');
    };

    return (
        <>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ flexGrow: 1 }}>
                        {/* Logo Section */}
                        <Box component="span" sx={{ display: { xs: 'block', md: 'block' } }}>
                            <ButtonBase disableRipple onClick={() => router.push('/')}>
                                <img src={'assets/logo.svg'} alt="Logo" width="100" />
                            </ButtonBase>
                        </Box>
                        {/* Search Section */}
                        <Box sx={{ display: { xs: 'none', md: 'block' }, transition: '0.5s' }}>
                            <OutlinedInput
                                id="input-search-header"
                                size="small"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search"
                                onKeyPress={handleKeywordKeyPress}
                                endAdornment={
                                    <IconButton onClick={() => router.push('/search')}>
                                        <SearchIcon fontSize="small" />
                                    </IconButton>
                                }
                                aria-describedby="search-helper-text"
                                inputProps={{ 'aria-label': 'weight' }}
                                sx={{ width: 440 }}
                            />
                        </Box>
                        {/* Cart Section */}
                        <Stack direction="row" justifyContent="space-between" spacing={2}>
                            <IconButton onClick={() => router.push('/product')}>
                                <PersonIcon />
                            </IconButton>
                            <IconButton onClick={handleOpen}>
                                <Badge badgeContent={4} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
            {/* Cart Drawe */}
            <Cart open={cartOpen} handleClose={handleClose} />
        </>
    );
}

export default Header;
