import { colors } from '../../Constants/Colors';
import { Stack } from '@mui/material'
import React from 'react';
import { category } from '../../Constants/Constants';

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
return (
    <Stack direction={'row'} sx={{ overflowX: 'scroll' }}>
        {category.map(item => (
            <button 
                key={item.name} 
                className='category-btn' 
                style={{ 
                    borderRadius: '0', 
                    background: item.name === selectedCategory && colors.blue,
                    color: item.name === selectedCategory && '#fff'}}
                onClick={() => selectedCategoryHandler(item.name)}
                >
                <span style={{ color: item.name === selectedCategory ? '#fff' : '#4935ff', marginRight: '15px'}}>{item.icon}</span>
                <span style={{ color: item.name === selectedCategory ? '#fff' : '#4935ff', opacity: '1'}}>{item.name}</span>
            </button>
        ))}
    </Stack>
)
}

export default Category
