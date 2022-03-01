import React from 'react';
import { ButtonBase, Grid, Tooltip, useTheme } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

import Avatar from './extended/Avatar';

interface ColorsProps {
    checked: boolean;
    colorsData: Array<any>;
}
function Colors({ checked, colorsData }: ColorsProps) {
    const theme = useTheme();
    return (
        <Grid item>
            <Tooltip title={colorsData[0].label}>
                <ButtonBase sx={{ borderRadius: '50%' }}>
                    <Avatar
                        color="inherit"
                        size="badge"
                        sx={{
                            bgcolor: colorsData[0].bg,
                            color: theme.palette.mode === 'light' ? 'grey.50' : 'grey.800'
                        }}
                    >
                        {checked && (
                            <CircleIcon sx={{ color: theme.palette.mode === 'light' ? 'grey.50' : 'grey.800', fontSize: '0.75rem' }} />
                        )}
                        {!checked && <CircleIcon sx={{ color: colorsData[0].bg, fontSize: '0.75rem' }} />}
                    </Avatar>
                </ButtonBase>
            </Tooltip>
        </Grid>
    );
}

export default Colors;
