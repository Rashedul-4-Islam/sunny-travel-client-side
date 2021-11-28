import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Services.css"

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() =>{
        fetch('https://fierce-temple-41087.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setServices(data)
        })
    },[])
    return (
        <div>
            <h1 className="fw-bold mt-5"> <span className="fs-5 font-style">Choose Your</span> <br /> Perfect Holiday</h1>
            <div>
            <Row xs={1} md={3} className="g-5 mx-4 mt-3">
                {services.map(service => (
                   
                    <Col  key = {service._id}>
                    <Card className="pb-3">
                        <Card.Img className="tour-image" variant="top" src={service.img} />
                        <Card.Body>
                        <Card.Title className="fs-3 fw-bold">{service.name}</Card.Title>
                        <Card.Text className="text-slice">
                            {service.description}
                        </Card.Text>
                        <Card.Text className="fw-bold">
                           Price : ${service.cost}
                        </Card.Text>
                        </Card.Body>

                        <Link to={`/tourdetails/${service._id}`}
                 
                        >
                           <button className="btn btn-danger w-50 m-auto">Book Now</button> 
                         </Link>
                        
                    </Card>
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
};

export default Services;