import type { NextPage } from 'next';
import Image from 'next/image';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button, Grid, Stack, Typography, Box, Container } from '@mui/material';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home: NextPage = () => {
    const { t } = useTranslation('common');
    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section>
            <Box
                sx={{
                    '& .slick-arrow::before': {
                        color: 'black',
                        fontSize: 35
                    }
                }}
            >
                <Slider {...settings}>
                    <div>
                        <Grid container spacing={10} justifyContent="center" alignItems={'center'}>
                            <Grid item xs={12} md={6}>
                                <Stack direction={'column'} spacing={3}>
                                    <Typography component="h1" variant="h4" color="text.primary">
                                        Buy groceries and Feed yourself,Even on the road.
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary" paragraph>
                                        How employees, surely the a said drops. Bathroom expected that systems let place. Her safely been
                                        little. Enterprises flows films it a fly the of wasn't designer the her thought. Enterprises flows
                                        films it a fly the of wasn't designer.
                                    </Typography>
                                    <Stack direction="row" spacing={2} sx={(theme) => ({ pt: theme.spacing(2) })}>
                                        <Button variant="contained" size={'large'}>
                                            Shop Now
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Image src={'/assets/undraw_shopping.svg'} height={400} width={400} layout="responsive" />
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <Grid container spacing={10} justifyContent="center" alignItems={'center'}>
                            <Grid item xs={12} md={6}>
                                <Stack direction={'column'} spacing={3}>
                                    <Typography component="h1" variant="h4" color="text.primary">
                                        Buy groceries and Feed yourself,Even on the road.
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary" paragraph>
                                        How employees, surely the a said drops. Bathroom expected that systems let place. Her safely been
                                        little. Enterprises flows films it a fly the of wasn't designer the her thought. Enterprises flows
                                        films it a fly the of wasn't designer.
                                    </Typography>
                                    <Stack direction="row" spacing={2} sx={(theme) => ({ pt: theme.spacing(2) })}>
                                        <Button variant="contained" size={'large'}>
                                            Shop Now
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Image src={'/assets/undraw_shopping.svg'} height={400} width={400} layout="responsive" />
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <Grid container spacing={10} justifyContent="center" alignItems={'center'}>
                            <Grid item xs={12} md={6}>
                                <Stack direction={'column'} spacing={3}>
                                    <Typography component="h1" variant="h4" color="text.primary">
                                        Buy groceries and Feed yourself,Even on the road.
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary" paragraph>
                                        How employees, surely the a said drops. Bathroom expected that systems let place. Her safely been
                                        little. Enterprises flows films it a fly the of wasn't designer the her thought. Enterprises flows
                                        films it a fly the of wasn't designer.
                                    </Typography>
                                    <Stack direction="row" spacing={2} sx={(theme) => ({ pt: theme.spacing(2) })}>
                                        <Button variant="contained" size={'large'}>
                                            Shop Now
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Image src={'/assets/undraw_shopping.svg'} height={400} width={400} layout="responsive" />
                            </Grid>
                        </Grid>
                    </div>
                </Slider>
            </Box>
        </section>
    );
};

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'footer']))
    }
});

export default Home;
