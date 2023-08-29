import React from 'react'
import './skill.css'
import UIdesign from '../../assets/ui-design.png';
import webdesign from '../../assets/website-design.png';
import appDesign from '../../assets/app-design.png';

const Skill = () => {
  return (
    <section id='skill' className='container'>
      <h1>What I do</h1>
      <p className='mainpara'>I a web developer with new and modren design of website and web app. I also have knowledge of app design and developement of responsive design and mobile friendly.you can check out my work in the porfolio section and this porfolio is also developed my me.</p>
      <div skill-bars>
        <div className='skill-bar'>
          <img src={UIdesign} alt='Image' className='img' />
          <div className='text'>
            <h2> UI/UX Design</h2>
            <p>I have experience in UI/UX Design and designed many app</p>
          </div>
        </div>
        <div className='skill-bar'>
          <img src={webdesign} alt='Image' className='img' />
          <div className='text'>
            <h2>
              Website Design
            </h2>
            <p>I have experience in UI/UX Design and designed many app</p>
          </div>
        </div>
        <div className='skill-bar'>
          <img src={appDesign} alt='Image' className='img' />
          <div className='text'>
            <h2>
              App Design
            </h2>
            <p>I have experience in UI/UX Design and designed many app</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Skill
