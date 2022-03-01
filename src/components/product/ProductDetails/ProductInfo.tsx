import React from 'react';
import { Grid, Stack, Typography, Rating, Divider, Button } from '@mui/material';

// assets
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

// project import
import Avatar from 'components/ui-components/extended/Avatar';
import Chip from 'components/ui-components/extended/Chip';

function ProductInfo() {
    return (
        <Grid container spacing={2}>
            {/* Product Tilte */}
            <Grid item xs={12}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Chip size="small" label={'In Stock'} chipcolor={'success'} sx={{ textTransform: 'capitalize' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Typography component="h1" variant="h5">
                                    Edwin Cunningham
                                </Typography>
                                <Chip size="small" label="New" chipcolor="primary" variant="outlined" />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Avatar variant="rounded" sx={{ bgcolor: 'grey.200', color: 'grey.800' }}>
                        <FavoriteBorderIcon />
                    </Avatar>
                </Stack>
            </Grid>
            {/* Product Description */}
            <Grid item xs={12}>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque tempore id ullam quo facilis, incidunt inventore
                    sunt suscipit exercitationem illum ea unde, dignissimos placeat pariatur minima commodi nemo blanditiis?
                </Typography>
            </Grid>
            {/* Rating */}
            <Grid item xs={12}>
                <Stack direction={'row'} alignItems="center" spacing={1}>
                    <Rating name="simple-controlled" value={4} precision={0.1} readOnly />
                    <Typography variant="caption">({'344'}+)</Typography>
                </Stack>
            </Grid>
            {/* Pricing */}
            <Grid item xs={12}>
                <Stack direction="row" alignItems={'center'} spacing={1}>
                    <Typography variant="h5" component="p" color="primary">
                        $390
                    </Typography>
                    <Typography variant="body1" sx={{ textDecoration: 'line-through' }}>
                        $500
                    </Typography>
                    <Typography variant="caption">(Inclusive of all taxes)</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            {/* Colors */}
            <Grid item xs={12}>
                Colors
            </Grid>
            {/* Size */}
            <Grid item xs={12}>
                Size
            </Grid>
            {/* Quantity */}
            <Grid item xs={12}>
                Quantity
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            {/* Buy / Add to cart Button */}
            <Grid item xs={12}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Button fullWidth color="primary" variant="contained" size="large" startIcon={<ShoppingCartTwoToneIcon />}>
                            Add to Cart
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button type="submit" fullWidth color="secondary" variant="contained" size="large">
                            Buy Now
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ProductInfo;
