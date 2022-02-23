import * as React from 'react';
import InventoryTable from './InventoryTable';
import bmw from '../images/BMW-Logo.jpg'
import mercedes from '../images/mercedes.jpg'
import audi from '../images/audi.webp'
import bentley from '../images/Bentley-logo.jpg'
import { Link } from 'react-router-dom';

const LuxuryVehicles = (props) => {
    return (
        <div>
            <InventoryTable />
            <div className='makeTopDiv'>
                <div className='makeCont'>
                    <Link to='inventory/Luxury Vehicle/BMW' className='makeLinks'><img src={bmw} alt=""className="shrink makeImgLogos margLeftImg"/></Link>
                    <Link to='inventory/Luxury Vehicle/Mercedes-Benz' className='makeLinks'><img src={mercedes} alt="" className="shrink makeImgLogos" /></Link>
                    <Link to='inventory/Luxury Vehicle/Audi' className='makeLinks'><img src={audi} alt="" className="shrink makeImgLogos" /></Link>
                    <Link to='inventory/Luxury Vehicle/Bentley' className='makeLinks'><img src={bentley} alt="" className="shrink makeImgLogos" /></Link>
                </div>
            </div>
        </div>
    )
}
export default LuxuryVehicles