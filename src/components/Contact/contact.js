import React from 'react'
import './contact.css'

const Contact = () => {
  return (
   <section id='contact' className='container'>
    <h1>Contact Me</h1>
    <p>Please fill the form below and put all the necessory information about work related</p>
    <form>

        <input type='text' name='name' className='name' placeholder='Your Name'/>
        <input type='email' name='email' className='email' placeholder='Your Email'/>
        <textarea name='message' rows='5' className='message' placeholder='Your Message'></textarea>
        <button type='submit' value='Send' className='btn'>Submit</button>

    </form>
   </section>
  )
}

export default Contact
