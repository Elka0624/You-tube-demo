import { CircularProgress, Stack, Box } from '@mui/material';
import React from 'react';
import './loader.css';

const Loader = () => {
return (
    <Box minHeight={'90vh'}>
        <Stack 
            direction={'row'}
            justifyContent={'spece-between'}
            alignItems={'center'}
            height={'100%'}
            className='box'
        >
            <CircularProgress />
        </Stack>
    </Box>
)
}

export default Loader
