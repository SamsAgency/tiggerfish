import React from 'react'
import "./WelcomeAdventure.css"
import greece from "../../../assets/game-potrait.jpg"
import maldives from "../../../assets/camera.jpg"
import { Link } from 'react-router-dom'

function WelcomeAdventure() {
    return (
        <div className="welcome-adventure">
            <div className="welcomehotelcolumn1">
                <div className="overlapingimages">
                    <img className="welcomehotelimage1" src={greece} alt="this is greece"/>
                    <img className="welcomeadventureimage2" src={maldives} alt='this is maldives'/>
                </div>
            </div>
            <div className="welcomehotelcolumn2">
                <div className="welcomehotelheaderandtext">
                    <p className="smallwelcomeintro">
                        LOREM IPSUM TEXT 
                    </p>
                    
                </div>
                <div className="thecontent">
                    <h2 className="welcomehotelheader">
                        Who we are
                    </h2>
                    <hr />
                    <p className="welcomehoteltext">
                        Tiggerfish is the best information technology and web design company in Kenya that provides 
                        information technology (IT) solutions, products and services using ultra-modern technologies. 
                        Our capacities involve web design & development, graphic designs and 3D modelling & rendering. 
                        We are built in trust, team work, professionalism, creativity, problem solving and greatness. 
                    </p>
                </div>
                <Link to="/contact" className="welcome-about-button">
                    Learn more
                </Link>
            </div>
        </div>
    )
}

export default WelcomeAdventure