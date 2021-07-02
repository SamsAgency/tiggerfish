import React from 'react'
import Footer from '../about/footer/Footer'
import NavbarTwo from '../about/NavbarTwo/NavbarTwo'
import Graphics from './Graphics/graphics'
import Modelling from './Modeling/modelling'
import './service.css'
import ServiceBanner from './ServiceBanner/ServiceBanner'
import Video from './Video/video'
import Web from './Web/web'

const Service = () => {
    return (
        <div className="service" >
            <NavbarTwo/>
            <ServiceBanner/>
            <Web/>
            <Graphics/>
            <Modelling/>
            <Video/>
            <Footer/>
        </div>
    )
}

export default Service
