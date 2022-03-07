import type { NextPage } from 'next';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const Home: NextPage = () => {
    const { t } = useTranslation('common');
    return (
        <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
                <Stack sx={{ height: '80vh', pt: 10 }} direction={'column'} spacing={4}>
                    <Typography component="h1" variant="h4" color="text.primary">
                        Buy groceries and Feed yourself,Even on the road.
                    </Typography>
                    <Typography variant="h6" color="text.secondary" paragraph>
                        How employees, surely the a said drops. Bathroom expected that systems let place. Her safely been little.
                        Enterprises flows films it a fly the of wasn't designer the her thought. Enterprises flows films it a fly the of
                        wasn't designer.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained">Shop Now</Button>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <Image src={'/assets/undraw_add_to_cart.svg'} height={500} width={500} />
            </Grid>
        </Grid>
    );
};

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'footer']))
    }
});

export default Home;
