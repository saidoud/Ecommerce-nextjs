import React from 'react';
import { Grid } from '@mui/material';

// project-import
import ProductImages from 'components/product/ProductDetails/ProductImages';

function Product() {
    return (
        <>
            <Grid container alignItems="center" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <ProductImages />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Product;
