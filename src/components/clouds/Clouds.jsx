import React from 'react'
import './clouds.scss';
import { cloudImg } from '../../assets/cloud/img';
export const Clouds = () => {
    return (
        <div className='cloudLayer' >
            <img src={cloudImg} alt='cloud'/>
        </div>
    )

}