import React from 'react';
import { Card, CardContent, FormControl, MenuItem, OutlinedInput, Select, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

function FilterHeader({ searchText = 'mobile phone', resultNumber = 39 }) {
    return (
        <Card>
            <Box sx={{ p: 2 }}>
                <Stack direction={'row'} justifyContent="space-between" alignItems={'center'}>
                    <Box>
                        <Typography variant="h6" component="p">
                            {`Searching for "${searchText}"`}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {resultNumber} results found
                        </Typography>
                    </Box>
                    <Stack direction="row" spacing={1} justifyContent="center" alignItems={'center'}>
                        <Typography variant="body1" color="text.secondary">
                            Sorted by :
                        </Typography>
                        <FormControl size="small">
                            <Select labelId="demo-multiple-name-label" id="demo-multiple-name" value={1}>
                                {filter.map((item, index) => (
                                    <MenuItem key={index} value={item.id}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                </Stack>
            </Box>
        </Card>
    );
}

const filter = [
    {
        id: 1,
        name: 'Relevance'
    },
    {
        id: 2,
        name: 'Date'
    },
    {
        id: 3,
        name: 'Price Low to High'
    },
    {
        id: 4,
        name: 'Price'
    }
];

export default FilterHeader;
