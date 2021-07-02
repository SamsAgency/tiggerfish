import React from 'react'
import AboutBanner from './AboutBanner/AboutBanner'
import Gallery from './AboutGallery/Gallery'
import Footer from './footer/Footer'
import NavbarTwo from './NavbarTwo/NavbarTwo'
import Statements from './Statements/Statements'
import WelcomeAdventure from './WelcomeAbout/WelcomeAdventure'

const About = () => {
    return (
        <div className="about">
            <NavbarTwo/>
            <AboutBanner/>
            <WelcomeAdventure/>
            <Statements/>
            <Gallery/>
            <Footer/>
        </div>
    )
}

export default About
