import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Link, Rating, Stack, Typography } from '@mui/material';

import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

function ProductCard() {
    return (
        <Card
            sx={{
                '&:hover': {
                    transform: 'scale3d(1.02, 1.02, 1)',
                    transition: 'all .4s ease-in-out'
                }
            }}
        >
            <CardMedia sx={{ height: 220 }} image={'assets/e-commerce/prod-1.jpg'} title="Contemplative Reptile" component={Link} />
            <Box
                sx={(theme) => ({
                    p: theme.spacing(1)
                })}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography component={Link} variant="subtitle1" sx={{ textDecoration: 'none' }}>
                            Freshly Baked Mixed
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Rating precision={0.5} name="size-small" value={4.5} size="small" readOnly />
                            <Typography variant="caption">({300}+)</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Typography variant="h6">${445}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" sx={{ color: 'grey.500', textDecoration: 'line-through' }}>
                                        ${300}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <IconButton color="primary">
                                <ShoppingCartTwoToneIcon fontSize="medium" />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    );
}

export default ProductCard;