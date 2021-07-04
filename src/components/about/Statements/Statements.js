import React from 'react'
import './Statements.css'

const Statements = () => {
    return (
        <div className="statements" id="statements">
            <div className="statements-content">
                <div className="statements-content-upper">
                    <h2 className="statements-h2">Our Statements</h2>
                    <p className="statements-upper-p">Check our Achievements, Mission and Vision statements </p>
                </div>
                <div className="statements-content-text">
                    <div className="statements-content-mission">
                        <h3 className="statements-h3">Mission</h3>
                        <p className="statements-p">
                            Our mission is to be the next level Information technology company that offers
                            professional and excelent services within East Africa and the Rest of Africa. 
                        </p>
                    </div>
                    <div className="statements-content-mission">
                        <h3 className="statements-h3">Achievements</h3>
                        <p className="statements-p">
                            We have worked with over seventeen clients, build several Software as a ServiceBanner
                            application, lots of graphic design tasks and twenty three cross-platform mobile applications
                        </p>
                    </div>
                    <div className="statements-content-mission">
                        <h3 className="statements-h3">Vision</h3>
                        <p className="statements-p">
                            Our vision is to be the leading Information Technology Company in East Africa and the
                            Rest of Africa
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statements


