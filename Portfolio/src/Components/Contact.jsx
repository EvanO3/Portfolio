
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css"

const publicApiKey = import.meta.env.VITE_REACT_APP_PUBLIC_API_KEY;


 const Contact = () => {
    useEffect(()=>{
        AOS.init({
          disable:"phone",
          duration:700,
          easing:"ease-out-cubic"
        })
          },[])
 
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_32pndwa', 'template_w67izks', form.current, publicApiKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <section  >

    </section>
    <div className="Form-inital">

<h2>Contact</h2>
<p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
    </div>
    <div className="form-div">
    <form   data-aos ="fade-right" ref={form}  onSubmit={sendEmail} >
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

    </div>
    </>
  );
};
Contact.displayName= "Contact";
export default Contact