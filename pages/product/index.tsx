import React from 'react';
import { Grid, Card, CardContent } from '@mui/material';

// project-import
import ProductImages from 'components/product/ProductDetails/ProductImages';
import ProductInfo from 'components/product/ProductDetails/ProductInfo';

function Product() {
    return (
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
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
        </Grid>
    );
}

export default Product;
