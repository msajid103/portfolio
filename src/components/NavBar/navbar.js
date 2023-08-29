import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navcontainer'>
    <nav className='navbar'>
        <img className='logo' src={logo} />
        <div className='menu-items'>
        <Link className='item'>Home</Link>
        <Link className='item'>About</Link>
        <Link className='item'>Porfolio</Link>
        <Link className='item'>Clients</Link>
        </div>
        <button className='menu-btn'>
            <img src={contactImg} className='contactImg'/><span>Contact Me </span></button>
    </nav>
    </div>
  )
}

export default Navbar
