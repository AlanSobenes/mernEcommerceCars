import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
// ----------popper
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
// ------------------
import Congrats from './Congrats';


const Checkout = (props) => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        card: "",
        ccv: "",
        exDate: ""
    };
    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    const [pay, setPay] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const [cart, setCart] = useState([])
    const [grandTotal, setGrandTotal] = useState("")

    // ----------popper
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    // ------------------

    useEffect(() => {
        if (Object.keys(formErrors).length == 0 && isSubmit === true) {
            setPay(true)
        }
        axios.get(`http://localhost:8000/api/Cart`)
            .then(res => {
                setCart(res.data.items)
            }).then(() => {
                total()
            })

    }, [formErrors, grandTotal])

    const total = () => {
        let gTotal = 0
        for (let item of cart) {
            gTotal = gTotal += item.price
        }
        setGrandTotal(gTotal)
    }



    const makePayment = (e) => {
        e.preventDefault();
        if (grandTotal != 0) {
            setFormErrors(validate(formValues))
            setIsSubmit(true)
        }
        if (pay === true && grandTotal != 0) {
            for (let item of cart) {
                axios.put(`http://localhost:8000/api/car/` + item.productId, {
                    quantity: 0
                })
            }
            for (let item of cart) {
                axios.delete(`http://localhost:8000/api/Cart/` + item._id)
                .then(() => {
                })
            }
            // ----------popper
            setAnchorEl(anchorEl ? null : e.currentTarget)
            // ------------------
        }
    }

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!values.firstName) {
            errors.firstName = "Please Enter Your First Name"
        }
        if (!values.lastName) {
            errors.lastName = "Please Enter Your Last Name"
        }
        if (!values.email) {
            errors.email = "Please Enter Your Email"
        }else if(!regex.test(values.email)){
            errors.email = "This is Not a valid Email Format"
        }
        if (!values.phone) {
            errors.phone = "Please Enter Your Phone Number"
        }
        if (!values.address) {
            errors.address = "Please Enter Your Street Address"
        }
        if (!values.city) {
            errors.city = "Please Enter Your City"
        }
        if (!values.state) {
            errors.state = "Please Enter Your State"
        }
        if (!values.card) {
            errors.card = "Please Enter Your Card Information"
        }
        if (!values.ccv) {
            errors.ccv = "Please Enter Your Cards CCV"
        }
        if (!values.exDate) {
            errors.exDate = "Please Enter A Date"
        }
        return errors
    }



    return (
        <div className='checkoutCont'>
            <div className='checkoutDiv'>
                <div >
                    <Popper id={id} open={open} anchorEl={anchorEl} >
                        <Box sx={{ p: 1 }} className="popBox">
                            <Congrats
                                firstName={formValues.firstName}
                                lastName={formValues.lastName}
                                address={formValues.address}
                                city={formValues.city}
                                state={formValues.state}
                                phone={formValues.phone}
                                email={formValues.email} />
                        </Box>
                    </Popper>
                    <div>
                        <h2 className='choose'>Thank You For Choosing Luxury Drip, Your Satisfaction Is Our Priority</h2></div>
                    <h3 className='total'>Your Total is ${Number(grandTotal).toLocaleString()}</h3>
                </div>
                <div>
                    <h3>Please Enter Your Payment Information</h3>
                    <div className='formCont'>
                        <div className='formDiv'>
                            <form>
                                <div className="formInputs">
                                    <div className='margRight'>
                                        <label>First Name</label>
                                        <TextField variant='outlined' name='firstName' value={formValues.firstName} placeholder="First Name" onChange={handleChange} className="inputWidth" />
                                        <p className='error'>{formErrors.firstName}</p>
                                    </div>
                                    <div>
                                        <label>Last Name</label>
                                        <TextField variant='outlined' name='lastName' value={formValues.lastName} placeholder="Last Name" onChange={handleChange} className="inputWidth" />
                                        <p className='error'>{formErrors.lastName}</p>
                                    </div>
                                </div>
                                <div className="formInputs">
                                    <div className='margRight'>
                                        <label>Email</label>
                                        <TextField variant='outlined' name='email' value={formValues.email} placeholder="Email" onChange={handleChange} className="inputWidth" />
                                        <p className='error'>{formErrors.email}</p>
                                    </div>
                                    <div>
                                        <label>Phone Number</label>
                                        <TextField variant='outlined' name='phone' value={formValues.phone} placeholder="Phone Number" onChange={handleChange} className="inputWidth" />
                                        <p className='error'>{formErrors.phone}</p>
                                    </div>
                                </div>
                                <div className="formInputs">
                                    <div className='margRight'>
                                        <label>Street Address</label>
                                        <TextField variant='outlined' name='address' value={formValues.address} placeholder="Street Address" onChange={handleChange} className="inputWidth" />
                                        <p className='error'>{formErrors.address}</p>
                                    </div>
                                    <div className='margRight'>
                                        <label>City</label>
                                        <TextField variant='outlined' name='city' value={formValues.city} placeholder="City" onChange={handleChange} className="cityW" />
                                        <p className='error'>{formErrors.city}</p>
                                    </div>
                                    <div>
                                        <label>State</label>
                                        <TextField variant='outlined' name='state' value={formValues.state} placeholder="State" onChange={handleChange} className="stateW" />
                                        <p className='error'>{formErrors.state}</p>
                                    </div>
                                </div>
                                <div className="formInputs">
                                    <div>
                                        <label>Card Information</label>
                                        <TextField variant='outlined' name='card' value={formValues.card} placeholder="Card Information" onChange={handleChange} className="inputWidth" />
                                        <p className='error'>{formErrors.card}</p>
                                    </div>
                                    <div>
                                        <label>Card CCV</label>
                                        <TextField variant='outlined' name='ccv' value={formValues.ccv} placeholder="CCV" onChange={handleChange} className='ccvW' />
                                        <p className='error'>{formErrors.ccv}</p>
                                    </div>
                                    <div>
                                        <label>Card Exp Date</label>
                                        <TextField variant='outlined' name='exDate' value={formValues.exDate} onChange={handleChange} className='exDateW' />
                                        <p className='error'>{formErrors.exDate}</p>
                                    </div>
                                </div>
                                <div className="formInputs formBtn" >
                                    <Button variant='contained' style={{ background: 'teal' }} aria-describedby={id} onClick={makePayment} >Pay</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout
