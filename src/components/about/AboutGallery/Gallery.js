import React from 'react'
import './Gallery.css'
import Dante from '../../../assets/image (1).jpg'
import Country from '../../../assets/image (10).jpg'
import Alexsandrov from '../../../assets/image (4).jpg'
import Malibu from '../../../assets/image (6).jpg'
import Rossano from '../../../assets/image (5).jpg'
import Magnum from '../../../assets/image (8).jpg'
import Bloom from '../../../assets/image (9).jpg'
import Bloom2 from '../../../assets/image (2).jpg'
// import Bloom from '../../../assets/dante.jpg'

const Gallery = () => {
    return (
        <div className="gallery" id="gallery">
            <div className="gallery-upper">
                <h3 className="gallery-h3"> Our Portfolio </h3>
            </div>
            <div className="gallery-content">
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
