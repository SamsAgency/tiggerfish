import {  faMapMarker, faPhoneSquareAlt, faEnvelopeSquare, faClock} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import logo from '../../../assets/tigerfish logo.png'
import React from 'react'
import { NavHashLink as Link } from 'react-router-hash-link'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="the-footer">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img className="the-footer-logo" src={logo} alt="tiggerfish ltd logo"/>
                        <h3 className="footer-h3">Tiggerfish Technology</h3>
                    </div>
                    <div className="footer-socials">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} color="#4267B2" size="3x" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" size="3x" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} color="#FD1D1D" size="3x" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} color="#0077b5" size="3x" />
                        </a>
                    </div><br/>
                    <p className="footer-logo-p">
                        For more information, check out our social media pages. 
                    </p>
                </div><hr/>

                <div className="footer-middle">
                    <h3 className="footer-h3">Get in touch</h3>
                    <ul className="footer-middle-ul">
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faMapMarker}/> University way, Nairobi Kenya</li>
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faPhoneSquareAlt} /> +254 799 756 331</li>
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faPhoneSquareAlt} /> +254 775 553 589</li>
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faEnvelopeSquare} /> info@tiggerfish.com</li>
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faEnvelopeSquare} /> marketing@tiggerfish.com</li>
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faEnvelopeSquare} /> tigerfish254@gmail.com</li>
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faClock} /> Always Open</li>
                    </ul>
                </div><hr/>

                <div className="footer-right">
                    <h3 className="footer-h3">Links</h3>
                    <ul className="footer-links">
                        <div className="footer-links-row">
                            <Link  to="/" className="footer-right-li">Homepage</Link>
                            <Link to="/" className="footer-right-li">About</Link>
                            <Link to="/" className="footer-right-li">Services</Link>
                            <Link to="/" className="footer-right-li">Contact</Link>
                        </div>

                        <div className="footer-links-row">
                            <Link to="/" className="footer-right-li">Web/app development</Link>
                            <Link to="/" className="footer-right-li">Graphic design</Link>
                            <Link to="/" className="footer-right-li">3D modeling & Rendering</Link>
                            <Link to="/" className="footer-right-li">Video editing & animation</Link>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                © Copyright 2021 |  Tiggerfish Technology
            </div>
        </div>
    )
}

export default Footer
