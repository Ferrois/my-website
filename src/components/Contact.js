import React, { Component, useState, useEffect } from 'react';
import emailjs, { init } from '@emailjs/browser';
import "../components-css/Contact.css";
import Aos from "aos";
import 'aos/dist/aos.css';
init("user_TTnneApm8i48TX26vc3Pc");



export default class Contact extends Component {
  render() {
    return (
      <div className='contactPage'>
        <div className='contactPageWrapper'>
          <ContactImage />
          <div className='contactInfoWrapper'>
            <div className='contactInfo'>Lets start something together. Contact me.</div>
          </div>
          <div action="" className='contactContainer'>
            <ContactForm />
            <p className='contactText'>
              Together we can rule the world.
              Contact me and we can work something out. 
            </p>
          </div>
        </div>

        <div className='socialContainer'>
        
        </div>

      </div>
    )
  }
}


const ContactImage = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
  
    return () => {
      window.removeEventListener("scroll",handleScroll);
    };
  }, []);
  

  return <img src='images/galaxy.jpg' className='contactImage' style={{
    "transform": `translateY(${offsetY * 0.5}px)`
  }}></img>
};



class ContactForm extends Component {
  submitForm(e){
    e.preventDefault();

    // var contactForm = document.querySelector(".contactForm");
    emailjs.sendForm("service_zv2ul46","template_j8d25f3",e.target)
      .then((res)=>{
        alert("Your message has successfully been sent to Ferrois. Thank you. I will contact you in a few days")
      },
      (error)=>{
        alert("Unfortunately your message has failed to send. Please try again, or directly contact me via Instagram or Youtube")
      }
    )
    e.target.reset();
  }

  render() {
    return(
      <form onSubmit={this.submitForm} className='contactForm'>
        <input type="email" placeholder='Email' name="from_email" id='emailInput' required></input>
        <input type="text" placeholder='Name' name="from_name" id='nameInput' required></input>
        <textarea type="text" placeholder='Message' name="message" id='messageInput' required></textarea>
        <button type='submit' className='contactSubmit'>.submit()</button>
      </form>
    )
  }
}
