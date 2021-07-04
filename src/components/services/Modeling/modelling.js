import React from 'react'
import Plane from '../../../assets/3d model.jpg'

const Modelling = () => {
    return (
        <div className="air" id="air">
            <div className="l-section-upper">
                <h3 className="l-section-image-h4">3D Modeling & Rendering </h3>
                <p className="l-section-p">Modelling </p>
            </div>
            <div className="l-section-content">
                <div className="l-content-image">
                    <img className="l-image" src={Plane} alt="A 3D model created by tiggerfish limited"/> 
                </div>

                <div className="l-content-content">
                    <p className="l-content-p">
                        When it comes to creating/modeling characters and environment, we do it with passion and as soon as possible.
                        We design characters that users may use in games, animations etc. We also model architecture construction publications
                        into a 3D model then rendering it to environment. In a nutshell we do;
                    </p>
                    <ul className="l-content-ul">
                        <li className="l-content-li">
                            3D character modelling,
                        </li>
                        <li className="l-content-li">
                            3D architecture modeling and rendering
                        </li>
                        <li className="l-content-li">
                            Landscape modeling and rendering
                        </li>
                        <li className="l-content-li">
                            Game environment modeling
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Modelling
