import React, { useState } from 'react';
import { AppBar, ButtonBase, Link, Toolbar, Box, OutlinedInput, InputAdornment, Stack, IconButton, Badge } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <AppBar position="static" color="inherit">
            <Toolbar>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ flexGrow: 1 }}>
                    {/* Logo Section */}
                    <Box component="span" sx={{ display: { xs: 'block', md: 'block' } }}>
                        <ButtonBase disableRipple component={Link} href="#">
                            <img src={'assets/logo.svg'} alt="Logo" width="100" />
                        </ButtonBase>
                    </Box>
                    {/* Search Section */}
                    <Box sx={{ display: { xs: 'block', md: 'block' } }}>
                        <OutlinedInput
                            id="input-search-header"
                            size="small"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon fontSize="small" />
                                </InputAdornment>
                            }
                            aria-describedby="search-helper-text"
                            inputProps={{ 'aria-label': 'weight' }}
                            sx={{ width: 400 }}
                        />
                    </Box>
                    {/* Cart Section */}
                    <Stack direction="row" justifyContent="space-between" spacing={2}>
                        <IconButton>
                            <PersonIcon />
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
