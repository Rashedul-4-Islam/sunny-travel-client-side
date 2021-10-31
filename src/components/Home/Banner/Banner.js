import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100 ban-height"
                src="./images/slider/slider-img1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1 className="caption">Explore and Travel</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 ban-height"
                src="./images/slider/slider-image2.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1 className="caption">enjoy <span className="text-warning">sunny</span></h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 ban-height"
                src="./images/slider/slider-image3.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className="caption">Relax and Enjoy</h1>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;