import React from 'react'
import './web.css'
import Plane from '../../../assets/Recipee 4.PNG'

const Web = () => {
    return (
        <div className="air" id="air">
            <div className="l-section-upper">
                <h3 className="l-section-image-h4">Programing & online Startups</h3>
                <p className="l-section-p">Web, app, desktop & game Development </p>
            </div>
            <div className="l-section-content">
                <div className="l-content-image">
                    <img className="l-image" src={Plane} alt="A recipe website created by tiggerfish technology"/> 
                </div>

                <div className="l-content-content">
                    <p className="l-content-p">
                        When it comes to programing/coding no one does it better than us. With us being experts in languages /frameworks like 
                        React(jsx, css), React Native, Express, Mongo Db, java, Django (python) and DRF (Django Rest Framework), you are
                        100% guaranteed that you will get your start up within time and as custom as you will want it to be. In points, 
                        this unit consist of ;
                    </p>
                    <ul className="l-content-ul">
                        <li className="l-content-li">
                            Web design and development
                        </li>
                        <li className="l-content-li">
                            App development
                        </li>
                        <li className="l-content-li">
                            Backend development Express/node/NoSQL or Django/Python/SQL
                        </li>
                        <li className="l-content-li">
                            Desktop development with Electron js
                        </li>
                        <li className="l-content-li">
                            Game development with unity
                        </li>
                        <li className="l-content-li">
                            Cyber Security
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Web
