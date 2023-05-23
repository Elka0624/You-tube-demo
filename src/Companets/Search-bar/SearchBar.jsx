import { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { colors } from '../../Constants/Colors'
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    
    
    const submitHandler = e => {
        e.preventDefault()
        if(value) {
            navigate(`/search/${value}`)
            setValue('')
        }
    }

return (
    <Paper 
    component={'form'}
    onSubmit={submitHandler}
    sx={{ border: `1px solid ${colors.blue}`, 
    pl: 2, boxShadow: 'none',
    borderRadius: 'none',
    mr: 5,
    }}>
        <input type="text"
        placeholder='Search...' 
        className='search-bar' 
        value={value}
        onChange={e => setValue(e.target.value)}
        />
        <IconButton type='submit'>
            <Search />
        </IconButton>
    </Paper>
)
}

export default SearchBar
