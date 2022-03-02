import React, { useState } from 'react';

// materia-ui
import { Box, Card, CardMedia, Grid, useMediaQuery, NoSsr, Skeleton } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// third-party
import Slider from 'react-slick';
import { motion } from 'framer-motion';

// project-import
import Avatar from 'components/ui-components/extended/Avatar';

function ProductImages() {
    const theme = useTheme();
    const [selected, setSelected] = useState('assets/e-commerce/prod-2.jpg');

    const products = [
        'assets/e-commerce/prod-1.jpg',
        'assets/e-commerce/prod-2.jpg',
        'assets/e-commerce/prod-7.jpg',
        'assets/e-commerce/prod-8.jpg',
        'assets/e-commerce/prod-7.jpg',
        'assets/e-commerce/prod-8.jpg'
    ];
    const matchDownLG = useMediaQuery(theme.breakpoints.up('lg'));

    const lgNo = matchDownLG ? 4 : 3;

    const settings = {
        dots: false,
        centerMode: true,
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
                    <motion.div whileHover={{ scale: 2 }} transition={{ delay: 0.1, duration: 1, type: 'tween' }}>
                        <CardMedia component="img" image={selected} sx={{ overflow: 'hidden', cursor: 'zoom-in' }} />
                    </motion.div>
                </Card>
            </Grid>
            {/* Slider Section */}
            <Grid
                item
                xs={10}
                sm={7}
                md={9}
                lg={10}
                xl={8}
                sx={{
                    '& .slick-next:before': {
                        color: theme.palette.primary.main,
                        fontSize: '25px'
                    },
                    '& .slick-prev:before': {
                        color: theme.palette.primary.main,
                        fontSize: '25px'
                    }
                }}
            >
                <NoSsr defer>
                    <Slider {...settings}>
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
                </NoSsr>
            </Grid>
        </Grid>
    );
}

export default ProductImages;
