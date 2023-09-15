import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_o2sq899', 'template_6g9uldk', form.current, 'Aw56TRc4tNlGzbIw4')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setName('')
    setEmail('')
    setMessage('')
  };
  return (
    <section id='contact' className='container'>
      <h1>Contact Me</h1>
      <p>Please fill the form below and put all the necessory information about work related</p>
      <form ref={form} onSubmit={sendEmail}>

        <input type='text' name='name' className='name' placeholder='Your Name' value={name} onChange={(e) => {
          setName((e.target.value))

        }} />
        <input type='email' name='email' className='email' placeholder='Your Email' value={email} onChange={(e) => {
          setEmail((e.target.value))
        }} />
        <textarea name='message' rows='5' className='message' placeholder='Your Message' value={message} onChange={(e) => {
          setMessage((e.target.value))
        }}></textarea>
        <button type='submit' value='Send' className='btn'>Submit</button>

      </form>
    </section>
  )
}

export default Contact
