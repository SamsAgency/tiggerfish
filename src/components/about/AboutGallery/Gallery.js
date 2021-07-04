import React from 'react'
import './Gallery.css'
import Dante from '../../../assets/bloomstar.PNG'
import Country from '../../../assets/940aircargo.PNG'
import Alexsandrov from '../../../assets/translift.PNG'
import Malibu from '../../../assets/homecover.PNG'
import Rossano from '../../../assets/adveture.PNG'
import Magnum from '../../../assets/agriculture.PNG'
import Bloom from '../../../assets/ecomerce.PNG'
import Bloom2 from '../../../assets/bloomstar.PNG'
// import Bloom from '../../../assets/dante.jpg'

const Gallery = () => {
    return (
        <div className="gallery" id="gallery">
            <div className="gallery-upper">
                <h3 className="gallery-h3"> Our Portfolio </h3>
            </div>
            <div className="gallery-content">
                <h4 className="gallery-headers">Programing/Web projects</h4>
                <div className="gallery-row">
                    <img className="gallery-image" src={Dante} alt="dante gallery"/>
                    <img className="gallery-image" src={Country} alt="dante gallery"/>
                    <img className="gallery-image" src={Alexsandrov} alt="dante gallery"/>
                    <img className="gallery-image" src={Malibu} alt="dante gallery"/>
                </div>
                <div className="gallery-row">
                    <img className="gallery-image" src={Rossano} alt="dante gallery"/>
                    <img className="gallery-image" src={Magnum} alt="dante gallery"/>
                    <img className="gallery-image" src={Bloom} alt="dante gallery"/>
                    <img className="gallery-image" src={Bloom2} alt="dante gallery"/>
                </div>
            </div>
            <div className="gallery-content">
                <h4 className="gallery-headers">Graphics & Modeling</h4>
                <div className="gallery-row">
                    <img className="gallery-image" src={Dante} alt="dante gallery"/>
                    <img className="gallery-image" src={Country} alt="dante gallery"/>
                    <img className="gallery-image" src={Alexsandrov} alt="dante gallery"/>
                    <img className="gallery-image" src={Malibu} alt="dante gallery"/>
                </div>
                <div className="gallery-row">
                    <img className="gallery-image" src={Rossano} alt="dante gallery"/>
                    <img className="gallery-image" src={Magnum} alt="dante gallery"/>
                    <img className="gallery-image" src={Bloom} alt="dante gallery"/>
                    <img className="gallery-image" src={Bloom2} alt="dante gallery"/>
                </div>
            </div>
        </div>
    )
}

export default Gallery
