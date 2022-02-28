import React from 'react';

// materia-ui
import { Card, CardMedia, Grid } from '@mui/material';

// third-party
import '~slick-carousel/slick/slick.css';
import '~slick-carousel/slick/slick-theme.css';

function ProductImages() {
    return (
        <Grid container>
            {/* Image Section */}
            <Grid item xs={12}>
                <Card>
                    <CardMedia
                        component="img"
                        image={'assets/images/e-commerce/prod-8.jpg'}
                        sx={{ overflow: 'hidden', cursor: 'zoom-in' }}
                    />
                </Card>
            </Grid>
            {/* Slider Section */}
            <Grid item xs={12}></Grid>
        </Grid>
    );
}

export default ProductImages;
