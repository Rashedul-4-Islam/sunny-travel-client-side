import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='container-fluid'>
             <div className="row">
             <div className=" about-us">
                <h2>ABOUT US</h2>
            </div>
            <div className="row py-4">
                <div className="col-12 col-md-6">
                    <img className="w-100 p-4" src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-1-img-1.jpg" alt="" />
                </div>
                <div className="col-12 col-md-6 px-3">
                    <h1 className="mt-5 fw-bold">About Our Agency</h1>
                    <p className="fs-6 fw-bold mt-4">Our Travel agents sell transportation, lodging, and admission to entertainment activities to individuals and groups planning trips. We offer advice on destinations, plan trip itineraries, and make travel arrangements for clients.</p>
                    <button className="btn btn-danger">learn more</button>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-12 col-md-6">
                    <img className="w-75 p-4 bg-danger" src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h3-img-1.png" alt="" />
                </div>
                <div className="col-12 col-md-6 px-3">
                    <h1 className="mt-5 fw-bold">Last Minute Offer</h1>
                    <p className="fs-6 fw-bold mt-4">Our Travel agents offer advice on destinations and make arrangements for transportation, hotel accommodations, car rentals, and tours for their clients. In addition, resorts and specialty travel groups use travel agents to promote travel packages to their clients.</p>
                    <button className="btn btn-danger">Book Now</button>
                </div>
            </div>
             </div>
        </div>
    );
};

export default About;