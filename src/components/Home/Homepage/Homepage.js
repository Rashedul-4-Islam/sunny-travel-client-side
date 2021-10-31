import React from 'react';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';
import Review from '../Review/Review';
import Services from '../Services/Services';
import './Homepage.css'

const Homepage = () => {
    return (
        <div className="homepage">
            <Banner></Banner>
            <Services></Services>
            <Explore></Explore>
            <Review></Review>
        </div>
    );
};

export default Homepage;