
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios'
import InventoryTable from './InventoryTable'
import Button from '@mui/material/Button'

const OneCar = (props) => {
    const { id } = useParams()
    const [car, setCar] = useState({})
    const [cart, setCart] = useState([])
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/car/${id}`)
            .then(res => {
                setCar(res.data.car)
            })
    }, [id])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Cart`)
            .then(res => {
                setCart(res.data.items)
            })
    }, [])

    const submit = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            const cartItem = {
                productId: car._id,
                make: car.make,
                model: car.model,
                color: car.color,
                year: car.year,
                image: car.image,
                category: car.category,
                price: car.price,
                miles: car.miles,
            }
            axios.post('http://localhost:8000/api/cart', cartItem)
                .then(res => {
                    history.push('/cart')
                })

        } else if (cart.length > 0) {
            let flag = false
            for (const product of cart) {
                if (product.productId === car._id) {
                    flag = true
                }
            } if (flag === false) {
                const cartItem = {
                    productId: car._id,
                    make: car.make,
                    model: car.model,
                    color: car.color,
                    year: car.year,
                    image: car.image,
                    category: car.category,
                    price: car.price,
                    miles: car.miles,
                }
                axios.post('http://localhost:8000/api/Cart', cartItem)
                    .then(res => {
                        history.push('/cart')
                    })
            }
        }
        history.push('/cart')
    }


    return (
        <div className="oneCarCont">
            <InventoryTable />
            <div className="dataCont">
                <div className="imageDiv">
                    <img src={car.image} alt="" className="oneCarImages" />
                    <img src={car.otherImage} alt="" className="oneCarImages" />
                    <img src={car.otherImage2} alt="" className="oneCarImages" />
                    <img src={car.interiorImage} alt="" className="oneCarImages" />
                </div>
                <div className="flex">
                    <div className="dataDiv">
                        <h1>{car.year} {car.make} {car.model}</h1>
                        <h2>Condition: {car.condition}</h2>
                        <h2>Color: {car.color}</h2>
                        <h2>Miles: {car.miles}</h2>
                        <h2>Price: ${Number(car.price).toLocaleString()}</h2>
                        <div className="descrpDiv">
                            <h3>{car.description}</h3>
                        </div>
                    </div>
                    <div className="conditionalDiv">
                        {
                            car.quantity === 1 ?
                                <div>
                                    <h4 style={{ color: 'green' }}>Available</h4>
                                    <Button variant="contained" className='condBtn' style={{ background: 'teal' }} onClick={(e) => submit(e)}>Add To Cart</Button>
                                    {cart.map((item, idx) => (
                                        <div key={idx}>
                                            {item.productId === car._id ? <h4 className="red">You Have This Vehicle In Your Cart</h4> : ""}
                                        </div>
                                    ))}
                                </div> : <h3 className="red ">This Vehicle has been Sold</h3>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OneCar

