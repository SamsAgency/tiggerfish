import React from 'react'
import './Contact.css'
import logo from '../../assets/tigerfish logo.png'
import {NavLink, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact">
                <div className="contact-content">
                    <div className="contact-left">
                        <div className="contact-left-content">
                            <div className="contact-left-top">
                                <img className="logo" src={logo} alt="tiggerfish logo" />
                                <h3 className="contact-tiggerfish">Tiggerfish || IT company</h3>
                            </div>
                            <div className="contact-middle">
                                <h2 className="contact-middle-title">Lorem ipsum Text</h2>
                                <p className="contact-middle-sub">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="contact-bottom">
                                <p className="social-media-legend">For more like and follow us on</p>
                                <div className="contact-social-media">
                                    <a href="https://www.facebook.com" rel="noreferrer" target="_blank" >
                                        <FontAwesomeIcon className="social-btns" color="#4267B2" icon={faFacebook} size="2x" /> 
                                    </a>
                                    <a href="https://twitter.com" rel="noreferrer" target="_blank" >
                                        <FontAwesomeIcon className="social-btns" color="#00acee" icon={faTwitter}  size="2x" />
                                    </a>
                                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank" >
                                        <FontAwesomeIcon color="#bc2a8d"  className="social-btns" icon={faInstagram}  size="2x" />
                                    </a>
                                    <a href="https://www.linkedin.com" rel="noreferrer" target="_blank" >
                                        <FontAwesomeIcon className="social-btns" color="#0e76a8" icon={faLinkedinIn} size="2x" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-right">
                        <div className="contact-right-nav">
                            <ul className="ul-nav">
                                <NavLink to="/about" className="li-nav">About</NavLink>
                                <NavLink to="/services" className="li-nav">Service</NavLink>
                                <NavLink to="/contact" className="li-nav">Contact</NavLink>
                            </ul>
                        </div>
                        <div className="contact-form">
                            <div className="contact-form-top">
                                <div className="input-group">
                                    <label>First Name</label>
                                    <input className="input" placeholder="Your fist name..."/>
                                </div>
                                <div className="input-group">
                                    <label>Last Name</label>
                                    <input className="input" placeholder="Your last name..."/>
                                </div>
                            </div>
                            <div className="input-group-full">
                                <label>Email</label>
                                <input className="input-long" placeholder="Your email..."/>
                            </div>
                            <div className="input-group-full">
                                <label>Your message</label>
                                <textarea className="text-area" placeholder="Your message..." />
                            </div>
                            <button className="send-button"> Send <FontAwesomeIcon icon={faPaperPlane} size="1x" color="white"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
