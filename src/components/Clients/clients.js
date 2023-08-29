import React from 'react'
import './clients.css'
import walmart from '../../assets/walmart.png'
import adobe from '../../assets/adobe.png'
import micro from '../../assets/microsoft.png'
import fb from '../../assets/facebook.png'

const Clients = () => {
    return (
        <section id='clients' className='container'>
            <h1>My Clients</h1>
            <p>These are my clients</p>
            <div className='clients-img'>
            <img src={walmart} alt='Image' className='client-img'/>
            <img src={adobe} alt='Image' className='client-img'/>
            <img src={micro} alt='Image' className='client-img'/>
            <img src={fb} alt='Image' className='client-img'/>
            </div>

        </section>
    )
}

export default Clients
