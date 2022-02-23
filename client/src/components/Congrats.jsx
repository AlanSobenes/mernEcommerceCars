import { Button } from "@mui/material"
import { Link } from 'react-router-dom'

const Congrats = (props) => {
    const firstName = props.firstName
    const lastName = props.lastName
    const address = props.address
    const city = props.city
    const state = props.state
    const email = props.email


    return (
        <div className="congrats">
            <h2>Congratulations {firstName} {lastName} your purchase was successful!</h2>
            <h3>Please Allow 5-10 Business Days for Delivery to the following address:</h3>
            <h3>{address}, {city} {state}</h3>
            <h3>If There Are To Be Any Expected Delays We Will Contact You at </h3>
            <h3>{email}</h3>
            <h3>Finally, Luxury Drip Would Like To Thank You For Your Business</h3>
            <div className="conBtn">
                <Link to='/' className="textDeco"><Button variant='contained' className="congratsBtn">Thank You</Button></Link>
            </div>
        </div>
    )
}
export default Congrats