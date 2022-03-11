import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    RadioGroup,
    Rating,
    Stack,
    TextField,
    Typography,
    Radio
} from '@mui/material';

import Colors from 'components/ui-components/Colors';
import ColorsOptions from 'constants/ColorsOptions';

function FilterSideBar() {
    const handleChangeColors = () => {};

    const colors = ['errorDark', 'orangeDark', 'errorMain', 'secondaryMain'];

    // product color select
    function getColor(color: string) {
        return ColorsOptions.filter((item) => item.value === color);
    }

    return (
        <Card>
            <CardContent>
                <Stack direction={'column'} justifyContent="center" spacing={2} divider={<Divider flexItem />}>
                    {/* Category */}
                    <Stack direction="column" spacing={1}>
                        <Typography component="p" variant="h6">
                            Category
                        </Typography>
                        <Typography component="p" variant="body2" color={'text.secondary'}>
                            All categories
                        </Typography>
                        <Typography component="p" variant="body2" color={'text.secondary'}>
                            Bath Preparations
                        </Typography>
                        <Typography component="p" variant="body2" color={'text.secondary'}>
                            Eye Makeup Preparations
                        </Typography>
                        <Typography component="p" variant="body2" color={'text.secondary'}>
                            Fragrance
                        </Typography>
                        <Typography component="p" variant="body2" color={'text.secondary'}>
                            Hair PreparationsHair Preparations
                        </Typography>
                    </Stack>
                    {/* Price Range */}
                    <Stack direction={'column'} spacing={1}>
                        <Typography component="p" variant="h6" gutterBottom>
                            Price Range
                        </Typography>
                        <Stack direction="row" justifyContent={'center'} alignItems="center" spacing={1}>
                            <TextField id="outlined-number" type="number" size="small" placeholder="0" />
                            <Typography component="p" variant="h6">
                                -
                            </Typography>
                            <TextField id="outlined-number" type="number" size="small" placeholder="370" />
                        </Stack>
                    </Stack>
                    {/* Status */}
                    <Stack direction="column" spacing={1}>
                        <Typography component="p" variant="h6">
                            Status
                        </Typography>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="On Sale" />
                            <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="In Stock" />
                            <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Label" />
                        </FormGroup>
                    </Stack>
                    {/* Rating */}
                    <Stack direction="column" spacing={1}>
                        <Typography component="p" variant="h6">
                            Rating
                        </Typography>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked size="small" />}
                                label={<Rating name="read-only" value={5} readOnly size="small" />}
                            />
                            <FormControlLabel
                                control={<Checkbox defaultChecked size="small" />}
                                label={<Rating name="read-only" value={4} readOnly size="small" />}
                            />
                            <FormControlLabel
                                control={<Checkbox defaultChecked size="small" />}
                                label={<Rating name="read-only" value={3} readOnly size="small" />}
                            />
                            <FormControlLabel
                                control={<Checkbox defaultChecked size="small" />}
                                label={<Rating name="read-only" value={2} readOnly size="small" />}
                            />
                            <FormControlLabel
                                control={<Checkbox defaultChecked size="small" />}
                                label={<Rating name="read-only" value={1} readOnly size="small" />}
                            />
                        </FormGroup>
                    </Stack>
                    {/* Colors */}
                    <Stack direction={'column'} spacing={1}>
                        <Typography component="p" variant="h6">
                            Colors
                        </Typography>
                        <RadioGroup row onChange={handleChangeColors} aria-label="colors" name="color" id="color" sx={{ ml: 1 }}>
                            {colors.map((item, index) => {
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
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default FilterSideBar;
