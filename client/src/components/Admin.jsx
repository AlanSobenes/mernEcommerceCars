import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Admin = (props) => {
// ---------------Form STATES ---------
const[make, setMake]=useState("")
const[model, setModel]=useState("")
const[color, setColor]=useState("")
const[year, setYear]=useState("")
const[image, setImage]=useState("")
const[interiorImage, setInteriorImage]=useState("")
const[otherImage, setOtherImage]=useState("")
const[otherImage2, setOtherImage2]=useState("")
const[price, setPrice]=useState(0)
const[category, setCategory]=useState("")
const[quantity, setQuantity]=useState(1)
const[condition, setCondition]=useState("")
const[miles, setMiles]=useState("")
const[description, setDescription]=useState("")


    const [cars, setCars] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/cars`)
            .then(res => {
                setCars(res.data.cars)
            })
    }, [])

    const reStock = (e, id) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/car/' + id, {
            quantity: 1
        })
            .then(() => {
                window.location.reload()
            })
    }

    const submit = (e) =>{
        e.preventDefault()
        const car ={
            make : make,
            model : model,
            color : color,
            year : year,
            image : image,
            interiorImage : interiorImage,
            otherImage : otherImage,
            otherImage2 : otherImage2,
            description : description,
            price : price,
            category : category,
            quantity : quantity,
            condition : condition,
            miles : miles
        }
        axios.post('http://localhost:8000/api/car', car)
        .then(res => {
            console.log(res)
            alert('success')
        })

    }

    return (
        <div style={{ marginTop: '10%' }}>
            {cars.map((car, idx) => (
                <div key={idx}>
                    {car.quantity === 0 ?
                        <div>
                            {car.make}
                            {car.model}
                            {car.quantity}
                            <button style={{marginLeft:'10px'}} onClick={(e) => { reStock(e, car._id) }}>Re-Stock</button>
                        </div>
                        : null}
                </div>
            ))}

            <div >
                <form onSubmit={submit} style={{width:'200px', marginLeft:'45%'}}>
                    <label htmlFor="">make:</label>
                    <input type="text" name="" id="" onChange={(e)=>setMake(e.target.value)} value={make}/>
                    <label htmlFor="">model:</label>
                    <input type="text" name="" id=""onChange={(e)=>setModel(e.target.value)} value={model} />
                    <label htmlFor="">color:</label>
                    <input type="text" name="" id="" onChange={(e)=>setColor(e.target.value)} value={color}/>
                    <label htmlFor="">year:</label>
                    <input type="text" name="" id=""onChange={(e)=>setYear(e.target.value)} value={year} />
                    <label htmlFor="">image:</label>
                    <input type="text" name="" id="" onChange={(e)=>setImage(e.target.value)} value={image}/>
                    <label htmlFor="">interior image:</label>
                    <input type="text" name="" id=""onChange={(e)=>setInteriorImage(e.target.value)} value={interiorImage} />
                    <label htmlFor="">other image:</label>
                    <input type="text" name="" id=""onChange={(e)=>setOtherImage(e.target.value)} value={otherImage} />
                    <label htmlFor="">other image2:</label>
                    <input type="text" name="" id=""onChange={(e)=>setOtherImage2(e.target.value)} value={otherImage2} />
                    <label htmlFor="">description:</label>
                    <input type="text" name="" id=""onChange={(e)=>setDescription(e.target.value)} value={description} />
                    <label htmlFor="">price:</label>
                    <input type="text" name="" id=""onChange={(e)=>setPrice(e.target.value)} value={price} />
                    <label htmlFor="">category:</label>
                    <input type="text" name="" id=""onChange={(e)=>setCategory(e.target.value)} value={category} />
                    <label htmlFor="">quantity:</label>
                    <input type="text" name="" id=""onChange={(e)=>setQuantity(e.target.value)} value={quantity} />
                    <label htmlFor="">condition:</label>
                    <input type="text" name="" id=""onChange={(e)=>setCondition(e.target.value)} value={condition} />
                    <label htmlFor="">miles:</label>
                    <input type="text" name="" id=""onChange={(e)=>setMiles(e.target.value)} value={miles} />
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}
export default Admin