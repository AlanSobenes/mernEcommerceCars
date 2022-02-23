import * as React from 'react';
import InventoryTable from './InventoryTable';
import hellcat from '../images/Hellcat-Logo.jpg'
import camaro from '../images/camaro.jpg'
import mustang from '../images/mustang.jpg'
import bmw from '../images/BMW-Logo.jpg'
import { Link } from 'react-router-dom';

const MuscleCars = (props) => {
    return (
        <div>
            <InventoryTable />
            <div className='makeTopDiv'>
                <div className='makeCont'>
                    <Link to='inventory/Muscle Car/Dodge' className='makeLinks'><img src={hellcat} alt=""className="shrink makeImgLogos margLeftImg"/></Link>
                    <Link to='inventory/Muscle Car/Chevrolet' className='makeLinks'><img src={camaro} alt="" className="shrink makeImgLogos" /></Link>
                    <Link to='inventory/Muscle Car/Ford' className='makeLinks'><img src={mustang} alt="" className="shrink makeImgLogos" /></Link>
                    <Link to='inventory/Muscle Car/BMW' className='makeLinks'><img src={bmw} alt="" className="shrink makeImgLogos" /></Link>
                </div>
            </div>
        </div>
    )
}
export default MuscleCars