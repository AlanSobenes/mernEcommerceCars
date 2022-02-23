import logo3 from '../images/logo3.png'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import BasicMenu from './BasicMenu';
import Search from './Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className='navBar'>
            <div className='flexNav'>
                <div className='basicMenu'>
                    <BasicMenu />
                </div>
                <div className='search'>
                    <Search />
                </div>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to='/'>
                        <img src={logo3} alt="nav bar logo" className='navLogo' />
                    </Link>
                </Typography>
                <div className='cart'>
                    <Link to='/cart' className='cartColor'><ShoppingCartIcon /></Link>
                </div>
            </div>
        </div>
    );
}
export default Navbar