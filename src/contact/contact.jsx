import React, { useEffect, useRef } from 'react'
import Navbar from '../navbar/navbar'
import emailjs from '@emailjs/browser';
import Footer from '../footer/footer';
import './contact.css'
export default function contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_50hfj91',    // ใส่ของคุณ
      'YOUR_TEMPLATE_ID',   // ใส่ของคุณ
      form.current,
      'YOUR_PUBLIC_KEY'     // ใส่ของคุณ
    )
      .then((result) => {
        alert('ส่งข้อความเรียบร้อยแล้ว!');
      }, (error) => {
        alert('เกิดข้อผิดพลาดในการส่ง: ' + error.text);
      });
  };
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
      <Navbar />
      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
      <div className="boxContact">


        <div className="containerContact">
          <div className="textAboutbox">
            <h2>Contact Us</h2>
          </div>

          <form className='fromContact' ref={form} onSubmit={sendEmail}>
            <div className="contactInput">
              <label htmlFor='name'>Your name </label>
              <input className='inputContact' type="text" id='name' name="user_name" placeholder='ชื่อของคุณ' required />
            </div>

            <div className="contactInput">
              <label htmlFor='email'>Email</label>
              <input className='inputContact' type="email" id='email' name="user_email" placeholder='อีเมลล์ของคุณ' required />
            </div>

            <div className="contactInput">
              <label htmlFor='phone'>Phone</label>
              <input className='inputContact' type="text" id='phone' name="user_phone" placeholder='อีเมลล์ของคุณ' required />
            </div>
            <div className="contactInput">
              <label htmlFor='message'>Message</label>
              <textarea className='inputContact' name="message" id='message' placeholder='ข้อความ' required />
            </div>

            <div className="btnBoxContact">
              <button className='btn-Contact' type="submit">Send</button>
            </div>
          </form>
        </div>

      </div>



      <Footer />
    </div>
  )
}
