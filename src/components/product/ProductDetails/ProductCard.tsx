import React from 'react';
import { Box, Card, CardMedia, Grid, IconButton, Link, Rating, Stack, Typography } from '@mui/material';

// asstes
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

interface ProductCardProps {
    imageUrl?: string;
    title?: string;
    price?: number;
}
function ProductCard({ imageUrl, title, price }: ProductCardProps) {
    return (
        <Card>
            <CardMedia sx={{ height: 260 }} image={imageUrl} title="Contemplative Reptile" component={'img'} />
            <Box
                sx={(theme) => ({
                    p: theme.spacing(1)
                })}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography component={Link} variant="subtitle1" sx={{ textDecoration: 'none' }}>
                            {title}
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
                                    <Typography variant="h6">${price}</Typography>
                                </Grid>
                                {/* <Grid item>
                                    <Typography variant="body1" sx={{ color: 'grey.500', textDecoration: 'line-through' }}>
                                        ${300}
                                    </Typography>
                                </Grid> */}
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
