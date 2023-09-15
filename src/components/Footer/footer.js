import React from 'react'
import './footer.css'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <footer id='footer'>
       <span className='copyright'> &copy; 2023 Copyright : <Link  to="home" offset={-100} className= 'link'>Muhammad Sajid</Link> </span>
    </footer>
  )
}

export default Footer
