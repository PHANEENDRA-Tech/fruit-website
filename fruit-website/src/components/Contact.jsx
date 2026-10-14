import React from 'react'

const Contact = () => {
  return (
    <section className='content-page'>
      <h1>Contact Us</h1>
      <p>Have a question or suggestion send us a message</p>
      <form className='contact-form' onSubmit={(event)=>{
        event.preventDefault();
        alert("Thank you for contacting Fruitful!");
      }}>
         <input type='text' placeholder='your name' required/>
         <input type='email' placeholder='your email' required/>
         <textarea placeholder='your message' required/>
         <button type='submit'>Send Message</button>
      </form>


    </section>
  );
}

export default Contact;