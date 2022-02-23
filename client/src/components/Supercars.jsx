import * as React from 'react';
import InventoryTable from './InventoryTable';
import mclaren from '../images/logo-McLaren.png'
import ferrari from '../images/Ferrari-Logo-Font.jpg'
import lambo from '../images/Lambo.jpg'
import audi from '../images/audi.webp'
import { Link } from 'react-router-dom';

const Supercars = (props) => {
    return (
        <div>
            <InventoryTable />
            <div className='makeTopDiv'>
                <div className='makeCont'>
                    <Link to='inventory/Supercar/McLaren' className='makeLinks'><img src={mclaren} alt="mclaren" className="shrink makeImgLogos margLeftImg" /></Link>
                    <Link to='inventory/Supercar/Ferrari' className='makeLinks'><img src={ferrari} alt="ferrari" className="shrink makeImgLogos"  /></Link>
                    <Link to='inventory/Supercar/Lamborghini' className='makeLinks'><img src={lambo} alt="lambo" className="shrink makeImgLogos"  /></Link>
                    <Link to='inventory/Supercar/Audi' className='makeLinks'><img src={audi} alt="audi" className="shrink makeImgLogos"  /></Link>
                </div>
            </div>
        </div>
    )
}
export default Supercars