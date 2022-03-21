import ProductCard from 'components/product/ProductDetails/ProductCard';
import { Card, CardContent, Grid, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import ProductSkeloton from 'components/ui-components/cards/skeleton/ProductSkeloton';
import FilterSideBar from 'components/search/FilterSideBar';
import FilterHeader from 'components/search/FilterHeader';
import { commerce } from 'lib/commerce';

function Search(props) {
    const { products } = props;
    const [loading, setLoading] = useState(false);
    console.log(products);

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

export async function getServerSideProps() {
    const { data } = await commerce.products.list();
    return {
        props: {
            products: data
        } // will be passed to the page component as props
    };
}

export default Search;
