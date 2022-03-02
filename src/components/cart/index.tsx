import { Drawer, Typography, Box } from '@mui/material';
import React from 'react';
interface CartProps {
    open: boolean;
    handleClose: any;
}
function Cart({ open, handleClose }: CartProps) {
    return (
        <Drawer anchor={'right'} open={open} onClose={handleClose} sx={(theme) => ({ p: theme.spacing(1) })}>
            <Box sx={{ width: 300 }}>
                <Typography variant="h4">Cart</Typography>
            </Box>
        </Drawer>
    );
}

export default Cart;
