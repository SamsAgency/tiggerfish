import React from 'react'
import Ship from '../../../assets/infographics-nature.png'

const Graphics = () => {
    return (
        <div className="air" id="ocean">
            <div className="l-section-upper">
                <h3 className="l-section-image-h4">Graphic design</h3>
                <p className="l-section-p">What Our graphics services entails </p>
            </div>
            <div className="l-section-content">
                <div className="l-content-content">
                    <p className="l-content-p">
                        When it comes to graphic design, we have a specialized team of professionals that works with logos, 
                        flyers, posters, publications like magazines, newspapers, ebook.
                        We also help to make ideal color combinations in branding your organization. In a 
                        nutshell, we design/model;
                    </p>
                    <ul className="l-content-ul">
                        <li className="l-content-li">
                            Logos, branding, UI and UX layouts/wireframe
                        </li>
                        <li className="l-content-li">
                            Business cards, bronchures, flyers
                        </li>
                        <li className="l-content-li">
                            Magazines, newspaper & ebook
                        </li>
                        <li className="l-content-li">
                            Infographics, Icon creation, data representation, presentation, etc
                        </li>
                        <li className="l-content-li">
                            Architecture models, house plans, landscape rendering etc
                        </li>
                        <li className="l-content-li">
                            Game character models, game environment, lighting etc
                        </li>
                    </ul>
                </div>
                <div className="l-content-image">
                    <img className="l-image" src={Ship} alt="Tiggerfish infographics sample"/> 
                </div>
            </div>
        </div>
    )
}

export default Graphics
