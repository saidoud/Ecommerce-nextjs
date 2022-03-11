import ProductCard from 'components/product/ProductDetails/ProductCard';
import { Card, CardContent, Grid, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import ProductSkeloton from 'components/ui-components/cards/skeleton/ProductSkeloton';
import FilterSideBar from 'components/search/FilterSideBar';
import FilterHeader from 'components/search/FilterHeader';

function Search() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={3}>
            {/* Filter Section */}
            <Grid item xs={12}>
                <FilterHeader />
            </Grid>
            <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                <FilterSideBar />
            </Grid>
            {/* Product List */}
            <Grid item xs={12} md={9}>
                {loading ? (
                    <ProductSkeloton />
                ) : (
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
                )}
            </Grid>
        </Grid>
    );
}

export default Search;
