import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import './footer.css'
export default function footer() {
    return (
        <footer className='footer-container'>
           
            <div className="footerBox">
                <div className="boxFooter">
                    <ul className='list-footer'>
                        <Link to={'/'}>
                            <li>Home</li>
                        </Link>
                        <Link to={'/about'}>
                            <li>About</li>
                        </Link>
                        <Link to={'/knowledge'}>
                            <li>Bit of knowledge</li>
                        </Link>

                    </ul>
                </div>
                <div className="footer">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="boxnoCopy">
                <p>Copyright © 2025 JIEI. สงวนสิทธิ์ทุกประการ </p>
            </div>
        </footer>
    )
}
