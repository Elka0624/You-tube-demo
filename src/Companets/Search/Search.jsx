import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { ApiService } from '../../Service/api.service'
import { Box, Container, Typography } from '@mui/material';
import { colors } from '../../Constants/Colors' 
import { Videos } from '..';

const Search = () => {
    const [videos, setVideos] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        const getData = async () => {
            try{
                const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
                setVideos(data.items)
            }catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [id])
    
return (
    <Box p={2} sx={{height: '90vh'}}>
        <Container maxWidth={'90%'}>
            <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                Search resualt for <span style={{color: colors.blue}}>{id}</span> Videos
            </Typography>
                <Videos videos={videos} />
        </Container>
    </Box>
)
}

export default Search
