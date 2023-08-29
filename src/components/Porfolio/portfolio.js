import React from 'react'
import './portfolio.css'
import {Link} from 'react-scroll'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'

const Portfolio = () => {
  return (
    <section id = 'portfolio' className='container'>
        <h1>My Portfolio</h1>
        <p>I a web developer with new and modren design of website and web app.
        I a web developer with new and modren design of website and web app
        I a web developer with new and modren design of website and web app
        I a web developer with new and modren design of website and web app
        </p>
        <div className='imgs'>
           <img src={portfolio1} alt='Image' className='img' />
           <img src={portfolio2} alt='Image' className='img' />
           <img src={portfolio3} alt='Image' className='img' />
           <img src={portfolio4} alt='Image' className='img' />
           <img src={portfolio5} alt='Image' className='img' />
           <img src={portfolio6} alt='Image' className='img' />
        </div>
        <Link className='btn portBtn'>See More</Link>
    </section>
  )
}

export default Portfolio
