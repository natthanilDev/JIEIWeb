import React from 'react'
import Logo from '../assets/logo.png'
import './navbar.css'
import { Link ,useLocation } from 'react-router-dom'
export default function navbar() {
    const location = useLocation()
    const render = location.pathname


    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <div className="logoBox">
                    <Link to={'/'}><img className='logo' src={Logo} alt="" /></Link>
                </div>
                <div className="menu-container">
                    <label htmlFor="bi-list" className='checkboxLabel'><i className="bi bi-list"></i></label>
                    <input type="checkbox" className='checkbox' id="bi-list" />
                    <div className="list-menu-mobile">
                        <ul className='display-menu'>
                            <label htmlFor="bi-list" className='checkboxLabelclode'><i className="bi bi-x-lg"></i></label>
                            <li className={render == '/' ? 'active' : ''}><Link to='/' >Home</Link></li>
                            <li className={render == '/about' ? 'active' : ''}><Link to='/about'>About</Link> </li>
                            <li className={render == '/menu1' || render == '/menu2'|| render == '/menu3' || render == '/menu4' ? 'active' : ''}><p><label htmlFor="bi-caret-down-fill" >Menu <i className="bi bi-caret-down-fill"></i></label></p></li>
                            <input type="checkbox" id='bi-caret-down-fill' className='checkbox-list-menu' />
                            <div className="menu-content">
                                <ul className='menu-list'>
                                    <label htmlFor="bi-caret-down-fill" className='down-fill-list'><i className="bi bi-x-lg"></i></label>
                                    <li><Link to={'/menu1'}>Menu</Link></li>
                                    <li><Link to={'/menu2'}>Menu</Link></li>
                                    <li><Link to={'/menu3'}>Menu</Link></li>
                                    <li><Link to={'/menu4'}>Menu</Link></li>
                                </ul>
                            </div>
                            <li className={render == '/contact' ? 'active' : ''}><Link to='/contact'>Contact</Link></li>

                            {/* <div className="btn-signup">
                                <button className="btnSignup">Sign Up</button>
                            </div> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
