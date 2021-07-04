import React from 'react'
import Ship from '../../../assets/film.jpg'

const Video = () => {
    return (
        <div className="air" id="ocean">
            <div className="l-section-upper">
                <h3 className="l-section-image-h4">Multimedia</h3>
                <p className="l-section-p">What our multimedia services entails </p>
            </div>
            <div className="l-section-content">
                <div className="l-content-content">
                    <p className="l-content-p">
                        When you mention multimedia services, we will react because we really rock. From videography, photography, 
                        drone footage to animations and cartoons, we really thrive in this. In a nutshell we do;
                    </p>
                    <ul className="l-content-ul">
                        <li className="l-content-li">
                            Video Editing
                        </li>
                        <li className="l-content-li">
                            Audio/ Music editing
                        </li>
                        <li className="l-content-li">
                            Photography
                        </li>
                        <li className="l-content-li">
                            Video recording
                        </li>
                        <li className="l-content-li">
                            Aerial and verticle capture and recording/ drone footage
                        </li>
                        <li className="l-content-li">
                            Animating 3dmodels / cartoons
                        </li>
                        <li className="l-content-li">
                            Video ads editing
                        </li>
                    </ul>
                </div>
                <div className="l-content-image">
                    <img className="l-image" src={Ship} alt="Video editing instrument being operated by tiggerfish"/> 
                </div>
            </div>
        </div>
    )
}

export default Video
