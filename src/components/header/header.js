import React from 'react'
import './header.css'
import Basketball from '../image/Basketball_image.webp'

export default function Header () {
    return(
    <div className='class_header'>
        <br></br>
        <h1 className='titre_site'>Baskentrainement</h1>
        <img src={Basketball} alt='Ballon de Basket' id='img_ballon'></img>
        <br></br>
    </div>
    )
}