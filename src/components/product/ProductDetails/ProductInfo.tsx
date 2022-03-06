import React, { useState } from 'react';
import {
    Grid,
    Stack,
    Typography,
    Rating,
    Divider,
    Button,
    IconButton,
    FormControl,
    Select,
    MenuItem,
    RadioGroup,
    Radio,
    FormControlLabel
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

// assets
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';

// project import
import Chip from 'components/ui-components/extended/Chip';
import Increment from 'components/ui-components/Increment';
import Colors from 'components/ui-components/Colors';
import ColorsOptions from 'constants/ColorsOptions';

function ProductInfo() {
    const [favoris, setFavoris] = useState(false);
    const [size, setSize] = useState('10');

    const handleChange = (event: SelectChangeEvent) => {
        setSize(event.target.value as string);
    };

    const handleChangeColors = () => {};

    // product color select
    function getColor(color: string) {
        return ColorsOptions.filter((item) => item.value === color);
    }

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
                    <IconButton onClick={() => setFavoris(!favoris)}>
                        {favoris ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon color="primary" />}
                    </IconButton>
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
                    <Rating name="simple-controlled" value={4.5} precision={0.1} readOnly />
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
                <Grid container alignItems={'center'}>
                    <Grid item xs={3} md={2}>
                        <Typography variant="body2">Colors</Typography>
                    </Grid>
                    <Grid item>
                        <RadioGroup row onChange={handleChangeColors} aria-label="colors" name="color" id="color" sx={{ ml: 1 }}>
                            {product.colors &&
                                product.colors.map((item, index) => {
                                    const colorsData = getColor(item);
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            value={item}
                                            control={
                                                <Radio
                                                    sx={{ p: 0.7 }}
                                                    disableRipple
                                                    checkedIcon={<Colors checked colorsData={colorsData} />}
                                                    icon={<Colors colorsData={colorsData} />}
                                                />
                                            }
                                            label=""
                                        />
                                    );
                                })}
                        </RadioGroup>
                    </Grid>
                </Grid>
            </Grid>
            {/* Size */}
            <Grid item xs={12}>
                <Grid container alignItems={'center'}>
                    <Grid item xs={3} md={2}>
                        <Typography variant="body2">Size</Typography>
                    </Grid>
                    <Grid item xs={4} md={2}>
                        <FormControl fullWidth size="small">
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={size} onChange={handleChange}>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            {/* Quantity */}
            <Grid item xs={12}>
                <Grid container alignItems={'center'}>
                    <Grid item xs={3} md={2}>
                        <Typography variant="body2">Quantity</Typography>
                    </Grid>
                    <Grid item xs={4} md={2}>
                        <Increment />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            {/* Buy / Add to cart Button */}
            <Grid item xs={12} md={10}>
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

// products list
const product = {
    id: 1,
    image: 'prod-1.jpg',
    discount: 25,
    salePrice: 350,
    offerPrice: 275,
    gender: 'male',
    categories: ['fashion', 'books'],
    colors: ['errorDark', 'orangeDark', 'errorMain', 'secondaryMain'],
    isStock: true
};
export default ProductInfo;
