import { useState, useEffect } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { colors } from '../../Constants/Colors'
import { Category } from '../';
import { Videos } from '../index';
import { ApiService } from '../../Service/api.service'

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])
    const selectedCategoryHandler = category => setSelectedCategory(category)

    useEffect(() => {
        const getData = async() => {
            try {
                const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
                setVideos(data.items)
            } catch (error) {
                
            }
            
        }
        getData()
    }, [selectedCategory]) 

return (
    <Stack>
        <Category 
            selectedCategoryHandler={selectedCategoryHandler}
            selectedCategory={selectedCategory}/>
        <Box p={2} sx={{ height: '90vh'}}>
            <Container maxWidth={'90%'}>
                <Typography variant='h4' fontWeight={'bold'}>
                    {selectedCategory} <span style={{color: colors.secondary}}>Video</span>
                </Typography>
                <Videos videos={videos} />
            </Container>
        </Box>
    </Stack>
)
}

export default Main
