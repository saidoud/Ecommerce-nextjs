import React from 'react';
import { Drawer, Typography, Box, Grid, Stack, IconButton, Divider, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';

interface CartProps {
    open: boolean;
    handleClose: any;
}
function Cart({ open, handleClose }: CartProps) {
    return (
        <Drawer anchor={'right'} open={open} onClose={handleClose}>
            <Box sx={{ height: '100vh', overflow: 'hidden' }}>
                {/* Cart Header */}
                <Grid item xs={12} sx={{ p: 1 }}>
                    <Stack direction="row" alignItems={'center'} justifyContent="space-between">
                        <Typography variant="h6">Cart</Typography>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </Grid>

                <Grid item xs={12} sx={(theme) => ({ pb: theme.spacing(1) })}>
                    <Divider />
                </Grid>
                <Box
                    sx={(theme) => ({
                        px: theme.spacing(1),
                        py: theme.spacing(2),
                        width: 360
                    })}
                >
                    <Grid container spacing={2}>
                        {/* Cart Product */}
                        <Grid item xs={12}>
                            <Stack direction={'column'} spacing={1} divider={<Divider flexItem />}>
                                <CartItem />
                                <CartItem />
                                <CartItem />
                            </Stack>
                        </Grid>
                        <Grid item sx={{ flexGrow: 1 }}></Grid>
                        {/* Cart Footer */}
                        <Grid item xs={12} sx={{ flexGrow: 1 }}>
                            <OrderSummary />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" fullWidth size="large">
                                proceed to checkout
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Drawer>
    );
}

export default Cart;
