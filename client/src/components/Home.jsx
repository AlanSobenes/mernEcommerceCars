import logo4 from '../images/logo4.png'
import mclaren from '../images/logo-McLaren.png'
import bentley from '../images/Bentley-logo.jpg'
import bugatti from '../images/Bugatti-Logo-Wallpaper.jpg'
import ferrari from '../images/Ferrari-Logo-Font.jpg'
import mercedes from '../images/mercedes.jpg'
import rangerover from '../images/rangerover.jpeg'
import lambo from '../images/Lambo.jpg'
import audi from '../images/audi.webp'
import hennessey from '../images/Hennessey-Logo.jpg'
import koenigsegg from '../images/koenigsegg.jpg'
import bmw from '../images/BMW-Logo.jpg'
import hellcat from '../images/Hellcat-Logo.jpg'
import camaro from '../images/camaro.jpg'
import mustang from '../images/mustang.jpg'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className='homeTop'>
            <div className='topDiv' >
                <Link to='/cars/McLaren'><img src={mclaren} alt="McLaren" className="shrink homeLogos" /></Link>
                <Link to='/cars/Bentley'><img src={bentley} alt="Bentley" className="shrink homeLogos" /></Link>
                <Link to='/cars/Ferrari'><img src={ferrari} alt="Ferrari" className="shrink homeLogos" /></Link>
                <Link to='/cars/Bugatti'><img src={bugatti} alt="Bugatti" className="shrink homeLogos" /></Link>
                <Link to='/cars/Mercedes-Benz'><img src={mercedes} alt="Mercedes-Benz" className="shrink homeLogos" /></Link>
                <Link to='/cars/Land Rover'><img src={rangerover} alt="Land Rover" className="shrink homeLogos" /></Link>
                <Link to='/cars/Lamborghini'><img src={lambo} alt="Lamborghini" className="shrink homeLogos" /></Link>
            </div>
            <div>
                <img src={logo4} alt="Luxury Drip" className='homeLOGO' />
            </div>
            <div className='botDiv'>
                <Link to='/cars/Audi'><img src={audi} alt="Audi" className="shrink homeBotLogos" /></Link>
                <Link to='/cars/Hennessey'><img src={hennessey} alt="Hennessey" className="shrink homeBotLogos" /></Link>
                <Link to='/cars/Koenigsegg'><img src={koenigsegg} alt="Koenigsegg" className="shrink homeBotLogos" /></Link>
                <Link to='/cars/BMW'><img src={bmw} alt="car" className="shrink homeBotLogos" /></Link>
                <Link to='/cars/Dodge'><img src={hellcat} alt="car" className="shrink homeBotLogos" /></Link>
                <Link to='/cars/Chevrolet'><img src={camaro} alt="car" className="shrink homeBotLogos" /></Link>
                <Link to='/cars/Ford'><img src={mustang} alt="car" className="shrink homeBotLogos" /></Link>
            </div>
        </div>
    )
}
export default Home