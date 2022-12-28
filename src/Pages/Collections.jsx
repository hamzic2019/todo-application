import React from 'react';
import './Collections.css'
import { FcDiploma2, FcPlus } from "react-icons/fc";

const Collections = () => {
  return (
    <div className='collection-warpper'>
        <div className='title'><h1>Collections</h1></div>
        <br />
        <div className='collection-divs'>
                <div className="box">
                    <div >
                        <FcDiploma2 className='box-logo'/>
                    </div>
                    <div>
                        <h1>School</h1>
                    </div>
                </div>

                <div className="placeholder">
                        <FcPlus className='placeholder-icon' />
                </div>

        </div>
    </div>
  )
}

export default Collections