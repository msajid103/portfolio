import React from 'react'
import './home.css'
import btnImg from '../../assets/hireme.png'
import bg from '../../assets/image.png'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <section className='container' id='home'>
      <div className='home-content'>
      <span className='hello'>Hello,</span>
      <span className='main-content'>I'm <span className='name'>Sajid</span> <br/> MERN Stack Developer</span>
      <p>I am a mern stack developer and develop websit using cuuting  <br/>edge technologies of modren era</p>
      <Link><button className='btn'>Hire Me</button></Link>
      </div>
     <img src={bg} alt='ProfileImg' className='bg' />
    </section>
  )
}

export default Home
