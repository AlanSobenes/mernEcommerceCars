import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import InventoryTable from './InventoryTable'
import { Link, useParams } from 'react-router-dom'

const Inventory = (props) => {
    const [cars, setCars] = useState([])
    const { cat } = useParams()
    const { make } = useParams()

    useEffect(() => { 
        axios.get(`http://localhost:8000/api/cars/${cat}/${make}`)
            .then(res => {
                setCars(res.data.cars)
            })
    }, [cat,make])
    return (
        <div className='displayDiv'>
            <InventoryTable />
            <div className='displayCont'>
                <div className='displayMap'>
                    {cars.map((car, idx) => (
                        <div key={idx} className='margT'>
                            <Link to={`/car/${car._id}`} className='textDeco white'>
                                <div className="flip-box boxCont">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <img src={car.image} className='carImage' alt="car" />
                                            <h2>{car.year}</h2>
                                            <h1>{car.make}</h1>
                                            <h2>{car.model}</h2>
                                            <h2>{car.condition}</h2>
                                        </div>
                                        <div className="flip-box-back">
                                            <img src={car.otherImage} className='carImage' alt="car" />
                                            <h2>{car.category}</h2>
                                            <h2>${Number(car.price).toLocaleString()}</h2>
                                            <h2>Miles: {car.miles}</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bottomBorder'>
                <h3 className='botText'>Displaying {cat}s for {make}</h3>
            </div>
        </div>
    )
}
export default Inventory