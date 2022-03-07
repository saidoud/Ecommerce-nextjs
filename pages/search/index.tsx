import ProductCard from 'components/product/ProductDetails/ProductCard';
import { Card, CardContent, Grid, Typography } from '@mui/material';

import React from 'react';

function Search() {
    return (
        <Grid container spacing={4}>
            {/* Filter Section */}
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Typography>Filter Section</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Card sx={{ height: '100vh' }}>
                    <CardContent>
                        <Typography>Filter Section</Typography>
                    </CardContent>
                </Card>
            </Grid>
            {/* Product List */}
            <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductCard />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Search;
