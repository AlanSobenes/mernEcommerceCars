import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = (props) => {
    const [cart, setCart] = useState([])
    const [grandTotal, setGrandTotal] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Cart`)
            .then(res => {
                setCart(res.data.items)
            }).then(() => {
                total()
            })
    }, [grandTotal])

    const remove = (id) => {
        axios.delete('http://localhost:8000/api/Cart/' + id)
        window.location.reload()
    }

    const total = () => {
        let gTotal = 0
        for (let item of cart) {
            gTotal = gTotal += item.price
        }
        setGrandTotal(gTotal)
    }

    return (
        <div className='cartCont'>
            <div className='optionDiv' >
                <div className='opDiv'>
                    <h4 className='vMarg' >Vehicle</h4>
                    <h4 className='pMarg'>Price</h4>
                </div>
                <hr className='hr' />
                {!cart[0] ? <div className='btnDiv'><Link to='/' className='textDeco'> <Button variant="contained" className='cartEmptyBtn'>Your Cart is Empty</Button></Link></div> :
                    <div className='cartMapDiv'>
                        {cart.map((item, idx) => (
                            <div key={idx}>
                                <div className='cartMappedDiv'>
                                    <div className='cartCarCont'>
                                        <Link to={`/car/${item.productId}`} ><img src={item.image} alt="item" className='cartPic' /></Link>
                                        <h3 className='cartCar'>{item.year} {item.make} {item.model}</h3>
                                    </div>
                                    <h2 className='cartPrice'>${Number(item.price).toLocaleString()}</h2>
                                    <div className='iconBtn'>
                                        <IconButton aria-label="delete" size="large" onClick={() => remove(item._id, item)} >
                                            <DeleteIcon fontSize="inherit" className='deleteBtn' />
                                        </IconButton>
                                    </div>
                                </div>
                                <hr className='hrCSS' />
                            </div>
                        )
                        )}
                    </div>
                }
                {cart[0] ? (cart.length === 1 ? <div className='thanks'><h4 className='thanksText'>Thank You For Your Superb Selection</h4></div> :
                    <div className='thanks'><h4 className='thanksText'>Thank You For Your Superb Selections</h4></div>) :
                    <div className='keepShop'><h4 className='keepShopText'>Please Browse Our Exquisite Collection of Vehicles</h4></div>}
            </div>
            <div className='rightBorder'>
                {cart[0] ? <div className='rightBorderDiv'><h3 style={{ color: 'white' }}>Grand Total: ${Number(grandTotal).toLocaleString()}</h3>
                    <Link to='/success' className='textDeco'>
                        <Button variant="contained" className='rightBorderBtn' style={{ background: 'seagreen' }} >Proceed To Checkout</Button>
                    </Link></div>
                    : null}
            </div>
        </div>
    )
}
export default Cart

