import React from 'react'
import './Contact.css'
import logo from '../../assets/tigerfish logo.png'
import {NavLink} from 'react-router-dom'
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
                                <h3 className="contact-tiggerfish">Tiggerfish <br/> IT company </h3>
                            </div>
                            <div className="contact-middle">
                                <h2 className="contact-middle-title">Contact us</h2>
                                <p className="contact-middle-sub">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="contact-bottom">
                                <p className="social-media-legend">For more like and follow us on</p>
                                <div className="contact-social-media">
                                    <a href="https://www.facebook.com/tiggerfish" rel="noreferrer" target="_blank" >
                                        <FontAwesomeIcon className="social-btns" color="#4267B2" icon={faFacebook} size="2x" /> 
                                    </a>
                                    <a href="https://twitter.com/TiggerfishL" rel="noreferrer" target="_blank" >
                                        <FontAwesomeIcon className="social-btns" color="#00acee" icon={faTwitter}  size="2x" />
                                    </a>
                                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank" >
                                        <FontAwesomeIcon color="#bc2a8d"  className="social-btns" icon={faInstagram}  size="2x" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/tiggerfish-technology-4704a4211/" rel="noreferrer" target="_blank" >
                                        <FontAwesomeIcon className="social-btns" color="#0e76a8" icon={faLinkedinIn} size="2x" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-right">
                        <div className="contact-right-nav">
                            <ul className="ul-nav">
                                <NavLink to="/" className="li-nav">Home</NavLink>
                                <NavLink to="/about" className="li-nav">About</NavLink>
                                <NavLink to="/services" className="li-nav">Service</NavLink>
                                <NavLink to="/contact" className="li-nav">Contact</NavLink>
                            </ul>
                        </div>
                        <form  className="contact-form" action="https://formsubmit.co/info@tiggerfish.co.ke"  method="POST">
                            <div className="contact-form-top">
                                <div className="input-group">
                                    <label>First Name</label>
                                    <input className="input" name="Firstname" placeholder="Your fist name..." required/>
                                </div>
                                <div className="input-group">
                                    <label>Last Name</label>
                                    <input className="input" name="Lastname" placeholder="Your last name..."/>
                                </div>
                            </div>
                            <div className="input-group-full">
                                <label>Email</label>
                                <input className="input-long" name="Email" placeholder="Your email..." required />
                            </div>
                            <div className="input-group-full">
                                <label>Your message</label>
                                <textarea className="text-area" name="Message" placeholder="Your message..." required />
                            </div>
                            <button className="send-button"> Send <FontAwesomeIcon icon={faPaperPlane} size="1x" color="white"/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
