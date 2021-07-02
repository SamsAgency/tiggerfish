import React from 'react'
import './web.css'
import Plane from '../../../assets/image (7).jpg'

const Web = () => {
    return (
        <div className="air" id="air">
            <div className="l-section-upper">
                <h3 className="l-section-image-h4">Programing & online Startups</h3>
                <p className="l-section-p">Web, app, desktop & game Development </p>
            </div>
            <div className="l-section-content">
                <div className="l-content-image">
                    <img className="l-image" src={Plane} alt="Air plane for logistics"/> 
                </div>

                <div className="l-content-content">
                    <p className="l-content-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <ul className="l-content-ul">
                        <li className="l-content-li">
                            Partnerships with an exclusive network of partners worldwide to offer end to end services
                        </li>
                        <li className="l-content-li">
                            Competitive rates – we utilize hundreds of airline flights daily and you don’t have to be limited 
                            to designated pickup or delivery times;
                        </li>
                        <li className="l-content-li">
                            Door-to-door, Airport-to-Door, Airport-to-Airport;
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Web
