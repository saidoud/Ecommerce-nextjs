import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Card, CardContent, Grid, Typography } from '@mui/material';

import ProductSkeloton from 'components/ui-components/cards/skeleton/ProductSkeloton';
import FilterSideBar from 'components/search/FilterSideBar';
import ProductCard from 'components/product/ProductDetails/ProductCard';
import FilterHeader from 'components/search/FilterHeader';
import { commerce } from 'lib/commerce';

function Search(props: any) {
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
                        {products.map((item: any, index: number) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProductCard title={item.name} imageUrl={item.image.url} price={item.price.raw} />
                            </Grid>
                        ))}
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
