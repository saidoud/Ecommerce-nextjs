import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

function Search() {
    return (
        <Grid container spacing={6}>
            {/* Filter Section */}
            <Grid item md={3}>
                <Card sx={{ height: '100vh' }}>
                    <CardContent>
                        <Typography>Filter Section</Typography>
                    </CardContent>
                </Card>
            </Grid>
            {/* Product List */}
            <Grid item md={9}></Grid>
        </Grid>
    );
}

export default Search;
