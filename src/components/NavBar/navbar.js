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
        <Link activeClass='active' spy={true} smooth={true} to="home" offset={-150} duration={800} className='item '>Home</Link>
        <Link activeClass='active' spy={true} smooth={true} to="skill" offset={-100} duration={800}  className='item'>About</Link>
        <Link activeClass='active' spy={true} smooth={true} to="portfolio" offset={-100} duration={800}  className='item'>Porfolio</Link>
        <Link activeClass='active' spy={true} smooth={true} to="clients" offset={-100} duration={800}  className='item'>Clients</Link>
        </div>
        <button className='menu-btn' onClick={()=>{
          document.getElementById('contact').scrollIntoView()
        }}>
            <img src={contactImg} className='contactImg'/><span>Contact Me </span></button>
    </nav>
    </div>
  )
}

export default Navbar
