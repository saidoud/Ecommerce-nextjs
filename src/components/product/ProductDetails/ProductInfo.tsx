import React from 'react';
import { Grid, Stack, Typography, Rating } from '@mui/material';

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
        </Grid>
    );
}

export default ProductInfo;
