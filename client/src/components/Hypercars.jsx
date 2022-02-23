import * as React from 'react';
import InventoryTable from './InventoryTable';
import hennessey from '../images/Hennessey-Logo.jpg'
import bugatti from '../images/Bugatti-Logo-Wallpaper.jpg'
import koenigsegg from '../images/koenigsegg.jpg'
import mclaren from '../images/logo-McLaren.png'
import { Link } from 'react-router-dom';

const Hypercars = (props) => {
    return (
        <div>
            <InventoryTable />
            <div className='makeTopDiv'>
                <div className='makeCont'>
                    <Link to='inventory/Hypercar/Hennessey' className='makeLinks'><img src={hennessey} alt="hennessey" className="shrink makeImgLogos margLeftImg"/></Link>
                    <Link to='inventory/Hypercar/Bugatti' className='makeLinks'><img src={bugatti} alt="bugatti" className="shrink makeImgLogos" /></Link>
                    <Link to='inventory/Hypercar/Koenigsegg' className='makeLinks'><img src={koenigsegg} alt="keonigsegg" className="shrink makeImgLogos" /></Link>
                    <Link to='inventory/Hypercar/McLaren' className='makeLinks'><img src={mclaren} alt="mclaren" className="shrink makeImgLogos" /></Link>
                </div>
            </div>
        </div>
    )
}
export default Hypercars