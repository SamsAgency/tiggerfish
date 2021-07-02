import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/tigerfish logo.png'
import './NavbarTwo.css'

const NavbarTwo = () => {
    return (
        <div className="navbar-two">
            <div className="navbar-two-content">
                <img src={logo} alt="tiggerfish logo" className="logo-2"/>
                <ul className="navbar-ul">
                    <NavLink to="/" className="navlink">Home</NavLink>
                    <NavLink to="/services" className="navlink">Services</NavLink>
                    <NavLink to="/contact" className="navlink">Contact</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default NavbarTwo
