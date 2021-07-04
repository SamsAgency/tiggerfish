import React from 'react';
import './home.css';
import logo from '../../assets/tigerfish logo.png'
import {NavLink, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faCode, faInfoCircle, faLaptopCode, faPalette, faPhotoVideo} from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <div className="home">
           <div className="home-content">
                <div className="home-left">
                    <div className="home-left-content">
                        <div className="home-left-top">
                            <img className="logo" src={logo} alt="tiggerfish logo" />
                            <h3 className="home-tiggerfish">Tiggerfish <br/> IT company</h3>
                        </div>
                        <div className="home-middle">
                            <h2 className="home-middle-title"> Creativity meets Logic </h2>
                            <p className="home-middle-sub"> Where Creativity & Logic can be visually presented  </p>
                        </div>
                        <div className="home-bottom">
                            <p className="social-media-legend">For more like and follow us on</p>
                            <div className="home-social-media">
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

                <div className="home-right">
                    <div className="home-right-nav">
                        <ul className="ul-nav">
                            <NavLink to="/about" className="li-nav">About</NavLink>
                            <NavLink to="/services" className="li-nav">Service</NavLink>
                            <NavLink to="/contact" className="li-nav">Contact</NavLink>
                        </ul>
                    </div>
                    <div className="home-right-middle">
                        <div className="home-right-middle-content">
                            <div className="home-right-content-heading-section">
                                <h3 className="home-right-content-heading">Welcome to tiggerfish technology</h3>
                                <FontAwesomeIcon icon={faLaptopCode} size="2x" color="#375ba9" />
                            </div>
                            <p className="home-right-content-text">
                                We Tiggerfish LTD are information technology company in Kenya that provides information technology (IT) solutions, 
                                products and services using ultra-modern technologies. Our capacities involve web design & development, graphic designs and 3D modelling 
                                & rendering, video editing and 2D/3D animations/cartoons. 
                            </p>
                                <Link to="/about" className="default-button-text">
                                    <p>More</p>
                                    <FontAwesomeIcon icon={faInfoCircle} size="2x"/>
                                </Link>
                        </div>
                        <hr className="hr"/>
                    </div>
                    <div className="home-right-bottom">
                        <div className="home-card1">
                            <div className="home-card-content">
                                <FontAwesomeIcon icon={faCode} size="3x" color="" />
                                <p className="home-card-top">Programing & Startups</p>
                                <p className="home-card-content-text">
                                    These services include:
                                </p>
                                <ul className="card-ul">
                                    <li className="card-li">Web design & development</li>
                                    <li className="card-li">Progressive Web Apps</li>
                                    <li className="card-li">Mobile app development</li>
                                    <li className="card-li">Desktop development</li>
                                    <li className="card-li">Game app development</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="home-card2">
                            <div className="home-card-content">
                                <FontAwesomeIcon icon={faPalette} size="3x"/>
                                <p className="home-card-top">Graphics Designs, Modelling & Rendering</p>
                                <p className="home-card-content-text">
                                    These services include:
                                </p>
                                <ul className="card-ul">
                                    <li className="card-li">Posters, flyers, Bronchures, Business cards</li>
                                    <li className="card-li">Logo design & Branding</li>
                                    <li className="card-li">Publications & Magazines</li>
                                    <li className="card-li">3D Modelling & Rendering </li>
                                    <li className="card-li">Architectural Modeling & Rendering</li>
                                </ul>
                            </div>
                        </div>
                        <div className="home-card3">
                            <div className="home-card-content">
                                <FontAwesomeIcon icon={faPhotoVideo} size="3x"/>
                                <p className="home-card-top">Multimedia services</p>
                                <p className="home-card-content-text">
                                    These services include:
                                </p>
                                <ul className="card-ul">
                                    <li className="card-li">Video Editing</li>
                                    <li className="card-li">Photo Editing</li>
                                    <li className="card-li">Cartoon/animation creating</li>
                                    <li className="card-li">Audio/Music editing</li>
                                    <li className="card-li">Photography & Video capture</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
           </div>
        </div>
    )
}

export default Home

