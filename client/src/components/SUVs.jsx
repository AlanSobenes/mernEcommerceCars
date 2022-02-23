import * as React from 'react';
import InventoryTable from './InventoryTable';
import lambo from '../images/Lambo.jpg'
import mercedes from '../images/mercedes.jpg'
import rangerover from '../images/rangerover.jpeg'
import bentley from '../images/Bentley-logo.jpg'
import { Link } from 'react-router-dom';

const Suvs = (props) => {
    return (
        <div>
            <InventoryTable />
            <div className='makeTopDiv'>
                <div className='makeCont'>
                    <Link to='inventory/SUV/Lamborghini' className='makeLinks'><img src={lambo} alt=""className="shrink makeImgLogos margLeftImg"/></Link>
                    <Link to='inventory/SUV/Mercedes-Benz' className='makeLinks'><img src={mercedes} alt="" className="shrink makeImgLogos" /></Link>
                    <Link to='inventory/SUV/Land Rover' className='makeLinks'><img src={rangerover} alt="" className="shrink makeImgLogos" /></Link>
                    <Link to='inventory/SUV/Bentley' className='makeLinks'><img src={bentley} alt="" className="shrink makeImgLogos" /></Link>
                </div>
            </div>
        </div>
    )
}
export default Suvs