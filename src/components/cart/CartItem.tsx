import React from 'react';
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import Avatar from 'components/ui-components/extended/Avatar';
import Increment from 'components/ui-components/Increment';

// Props
// Image / (Title/Price) /Quantity    / Delete
function CartItem() {
    return (
        <Stack direction="row" alignItems={'center'} justifyContent="space-between" spacing={2}>
            {/* Image */}
            <Box>
                <Avatar size="md" variant="rounded" src={'assets/e-commerce/prod-2.jpg'} />
            </Box>
            {/* Title */}
            <Box>
                <Stack direction="column">
                    <Typography variant="subtitle2" sx={{ pb: '1px' }}>
                        Jerry Gilbert
                    </Typography>
                    <Typography variant="subtitle2">$100</Typography>
                </Stack>
            </Box>
            {/* Quantity */}
            <Box>
                <Increment />
            </Box>
            {/* Delete */}
            <Box>
                <IconButton color="error" size="small">
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </Box>
        </Stack>
    );
}

export default CartItem;
