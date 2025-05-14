import React, { useEffect } from 'react'
import Navbar from '../navbar/navbar'
import './about.css'
import AboutImage1 from '../assets/imageAbout1.jpg'
import { useLocation } from 'react-router-dom'
import Footer from '../footer/footer'
import  Helmet from 'react-helmet'
export default function about() {

  const locationPage = useLocation().pathname
  useEffect(()=>{
    window.scrollTo(0,0)
    // window.location.reload()
  },[locationPage])
  return (
    <div>
      <Helmet>
        <title>About IT Department.</title>
      </Helmet>
      <Navbar />
      <div className="about-container">
        <div className="aboutBox">
          <div className="topicAbout">
            <p className='aboutUs'>About Us</p>
            <p className='contentAboutUs'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ad quibusdam totam vel obcaecati iusto dignissimos in, autem corrupti, perspiciatis architecto minima enim eveniet velit magnam esse quod ducimus amet?
            </p>
          </div>
          <div className="imgAbout">
            <img className='AboutImage' src={AboutImage1} alt="" />
          </div>

        </div>


        <div className="aboutBox">
          <div className="imgAbout1">
            <img className='AboutImage' src={AboutImage1} alt="" />
          </div>
          <div className="topicAbout1">
            <p className='aboutUs'>About Us</p>
            <p className='contentAboutUs'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ad quibusdam totam vel obcaecati iusto dignissimos in, autem corrupti, perspiciatis architecto minima enim eveniet velit magnam esse quod ducimus amet?
            </p>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  )
}
