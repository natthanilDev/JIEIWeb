import React from 'react'
import { Link } from 'react-router-dom'
import './404.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
export default function none404() {
  return (
    <div>
      <Navbar />
      <div className="notFound">
        <p className='j404'>404 </p>
        <p className='notURL'>Page Not Found</p>

        
      </div>



      <Footer />
    </div>
  )
}
