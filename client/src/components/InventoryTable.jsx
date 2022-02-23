import * as React from 'react';
import logo2 from "../images/logo2.png"
import { Link } from "react-router-dom"

export default function InventoryTable() {
    return (
        <div>
            <div className='invTopDiv'>
                <div>
                    <Link to='/FullInventory'><img src={logo2} alt="Logo" className='invLogo' /></Link>
                    <div className='tableDiv'>
                        <Link to='/Supercars' className='textDeco'><h3 className='hover02 white'>Supercars</h3></Link>
                        <Link to='/Hypercars' className='textDeco'> <h3 className='hover02 white'>Hypercars</h3></Link>
                        <Link to='/SportsUtilityVehicles' className='textDeco'><h3 className='hover02 white'>Sports Utility Vehicles</h3></Link>
                        <Link to='/LuxuryVehicles' className='textDeco'><h3 className='hover02 white'>Luxury Vehicles</h3></Link>
                        <Link to='/MuscleCars' className='textDeco'><h3 className='hover02 white'>Muscle Cars</h3></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}