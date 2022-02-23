import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function BasicMenu() {
    const [query, setQuery] = useState('')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory()
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const searchCars = () => {
        if (query !== '') {
            setQuery('')
            history.push(`/search/${query}`)
            handleClose()
        }
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='hover02 leftMarg'
            >
                Search
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div className='searchBoxWidth'>
                    <MenuItem ><input className='width' type="text" onChange={(e) => setQuery(e.target.value)} value={query} /></MenuItem>
                    <div className='flexSearch'>                      
                            <MenuItem onClick={searchCars}><Button variant='contained' style={{ background: 'teal' }}>Search</Button></MenuItem>                                             
                            <MenuItem onClick={handleClose}><Button variant='contained' style={{ background: 'orangered' }}>Close</Button></MenuItem>                      
                    </div>
                </div>
            </Menu>
        </div>
    )
}