import React from 'react';
import { Drawer, Typography, Box, Grid, Stack, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem';

interface CartProps {
    open: boolean;
    handleClose: any;
}
function Cart({ open, handleClose }: CartProps) {
    return (
        <Drawer anchor={'right'} open={open} onClose={handleClose}>
            <Box sx={(theme) => ({ px: theme.spacing(1), py: theme.spacing(2), width: 360 })}>
                <Grid container spacing={2}>
                    {/* Cart Header */}
                    <Grid item xs={12}>
                        <Stack direction="row" alignItems={'center'} justifyContent="space-between">
                            <Typography variant="h6">My Cart</Typography>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sx={(theme) => ({ pb: theme.spacing(1) })}>
                        <Divider />
                    </Grid>
                    {/* Cart Product */}
                    <Grid item xs={12}>
                        <Stack direction={'column'} spacing={1} divider={<Divider flexItem />}>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </Stack>
                    </Grid>
                    {/* Cart Footer */}
                    <Grid item xs={12}></Grid>
                </Grid>
            </Box>
        </Drawer>
    );
}

export default Cart;
