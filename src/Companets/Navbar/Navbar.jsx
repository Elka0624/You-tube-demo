import React from 'react';
import { Stack, Box } from '@mui/material';
// import logo  from '../../Constants/logo-tube.png'
import { colors } from '../../Constants/Colors'
import { Link } from 'react-router-dom';
import { SearchBar } from '../index'

const Navbar = () => {
return (
    <Stack 
        direction={'row'} 
        alignItems={'center'} 
        justifyContent={'space-between'} 
        p={1}
        height={'10vh'}
        sx={{
            position: 'sticky', top: 0, zIndex: 999, background: colors.primary,  
        }}
        >
        <Link to={'/'} className='link'>
            <h2 className='logocss'>Elka - Tube</h2>
        </Link>
        {/* <img src={logo} alt="logo" height={100} /> */}
        <SearchBar />
        <Box />
    </Stack>
)
}

export default Navbar
