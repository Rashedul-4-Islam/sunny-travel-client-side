import React, { useEffect, useState} from 'react';
import {  Col, Row } from 'react-bootstrap';

const MyBooking = () => {
    const [orders,setOrders] = useState([]);
    useEffect(() =>{
        fetch('https://fierce-temple-41087.herokuapp.com/myorders')
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    },[]);

    const handleDelete = id => {
           const url = `https://fierce-temple-41087.herokuapp.com/myorders/${id}`;
           fetch(url, {
               method: 'DELETE',
               headers: {"content-type" : "application/json"},
           })
           .then(res => res.json())
           .then(data => {
               if(data.deletedCount){
                alert("Are you cancel booking?")
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
               }
              
         });
        }
              

    return (
        <div className="my-5">
            <h1 className="fw-bold">My Booking</h1>
            <div>
            <Row xs={1} md={2} className="g-5 mx-4 mt-3">
                {orders.map(order => (
                    <Col key={order._id}>
                   <div className="card mb-3 ">
                  <div className="row g-0">
                    <div className="col-md-4 py-2 ps-2">
                    <img src={order.img} className="w-100" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title fw-bold">{order.name}</h3>
                        <p className="card-text fw-bold">Cost : {order.cost}</p>
                        <button onClick={() => handleDelete(order._id)} className="btn btn-danger w-50 m-auto">cancel</button> 
                    </div>
                    </div>
                </div>
                </div>
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
};

export default MyBooking;