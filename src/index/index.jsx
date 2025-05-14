import React, { useEffect } from 'react'
import Navbar from '../navbar/navbar'
import imgInto from '../assets/imageIndex.png'
import Footer from '../footer/footer'
import { Helmet } from 'react-helmet'
import './index.css'
export default function index() {
    useEffect(()=>{
        window.scrollTo(0 , 0);
    },[])
    return (
        <div className='index'>

           

            <Navbar />
            <div className="container">
                <div className="intoBox">
                    <div className="imgInto">
                        <img src={imgInto} alt="" />
                    </div>
                    <div className="textInto">
                        <div className="textBox1">
                            <p>IT Department</p>
                        </div>
                        <div className="textBox2">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus adipisci eligendi dicta ad rerum, illo voluptatem veniam temporibus ullam quia facilis laboriosam atque pariatur! Deserunt asperiores ut hic rem optio.</p>
                        </div>
                        <div className="btnBox">
                            <button>IT Department</button>
                            <button>About IT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newBoxText">
                <p>IT New</p>
            </div>
            <div className="new-container">
                <div className="newBox">
                    <div className="imageNew">
                        <img className='imgNew' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCBq9ZMFBWsB4NVFkOLkh1nzmmwvzyzE3sg&s" alt="" />
                    </div>
                    <div className="topicNew">
                        <p>new it ......</p>
                    </div>
                    <div className="contentNew">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quo rerum, error velit repudiandae aspernatur commodi consequuntur quos, cumque nisi vitae nesciunt sapiente iste sed nostrum mollitia nobis ducimus nam.</p>
                    </div>
                </div>
                <div className="newBox">
                    <div className="imageNew">
                        <img className='imgNew' src="https://s.isanook.com/sh/0/di/og-channel/s-news.png?ip/crop/w1200h700/q80/png" alt="" />
                    </div>
                    <div className="topicNew">
                        <p>new it ......</p>
                    </div>
                    <div className="contentNew">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quo rerum, error velit repudiandae aspernatur commodi consequuntur quos, cumque nisi vitae nesciunt sapiente iste sed nostrum mollitia nobis ducimus nam.</p>
                    </div>
                </div>
                <div className="newBox">
                    <div className="imageNew">
                        <img className='imgNew' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzeXF4KhgB3YsFzsvb-KUS3AXwR4VdEYeTXw&s" alt="" />
                    </div>
                    <div className="topicNew">
                        <p>new it ......</p>
                    </div>
                    <div className="contentNew">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quo rerum, error velit repudiandae aspernatur commodi consequuntur quos, cumque nisi vitae nesciunt sapiente iste sed nostrum mollitia nobis ducimus nam.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
