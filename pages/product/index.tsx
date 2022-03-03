import React, { lazy } from 'react';
import { Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// project-import

import Loadable from 'components/ui-components/Loadable';

const ProductInfo = Loadable(lazy(() => import('components/product/ProductDetails/ProductInfo')));
const ProductImages = Loadable(lazy(() => import('components/product/ProductDetails/ProductImages')));
const ProductCard = Loadable(lazy(() => import('components/product/ProductDetails/ProductCard')));

function Product() {
    return (
        <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={5}>
                        <ProductImages />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <ProductInfo />
                    </Grid>
                </Grid>
            </Grid>
            {/* Related Product Title */}
            <Grid item xs={12} lg={10} sx={{ mt: 3 }}>
                <Typography variant="h5">Related Products</Typography>
            </Grid>
            {/* Related Product Card */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProductCard />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Product;
