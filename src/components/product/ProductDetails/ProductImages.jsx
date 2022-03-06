import React, { useState, useRef } from 'react';

// materia-ui
import { Box, Card, CardMedia, Grid, useMediaQuery, Button, Stack, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// third-party
import Slider from 'react-slick';
import { motion } from 'framer-motion';

// project-import
import Avatar from 'components/ui-components/extended/Avatar';

function ProductImages() {
    const theme = useTheme();
    const slider = useRef(null);
    const [selected, setSelected] = useState('assets/e-commerce/prod-2.jpg');

    const products = [
        'assets/e-commerce/prod-1.jpg',
        'assets/e-commerce/prod-2.jpg',
        'assets/e-commerce/prod-6.jpg',
        'assets/e-commerce/prod-8.jpg',
        'assets/e-commerce/prod-7.jpg',
        'assets/e-commerce/prod-4.jpg'
    ];
    const matchDownLG = useMediaQuery(theme.breakpoints.up('lg'));

    const lgNo = matchDownLG ? 4 : 3;

    const settings = {
        dots: false,
        arrows: false,
        lazyLoad: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '0px',
        slidesToShow: products.length > 3 ? lgNo : products.length
    };
    return (
        <Grid container alignItems="center" justifyContent="center">
            {/* Image Section */}
            <Grid item xs={12}>
                <Card>
                    <CardMedia component="img" loading="lazy" image={selected} sx={{ overflow: 'hidden', cursor: 'zoom-in' }} />
                </Card>
            </Grid>
            {/* Slider Section */}
            <Grid item xs={12}>
                <Grid container alignItems={'center'} spacing={1}>
                    <Grid item xs={1}>
                        <IconButton color="primary" onClick={() => slider?.current?.slickPrev()}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={10}>
                        <Slider ref={slider} {...settings}>
                            {products.map((item, index) => (
                                <Box key={index} sx={{ p: 1 }} onClick={() => setSelected(item)}>
                                    <Avatar
                                        outline={selected === item}
                                        size={matchDownLG ? 'lg' : 'lg'}
                                        color="primary"
                                        src={item}
                                        variant="rounded"
                                        sx={{ m: '0 auto', cursor: 'pointer' }}
                                    />
                                </Box>
                            ))}
                        </Slider>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton color="primary" onClick={() => slider?.current?.slickNext()}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ProductImages;
