import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footers container-fluid">
            <div className="row bg-dark text-light mt-5 pt-4">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <h1 className="text-warning fw-bold">SUNNY TRAVEL</h1>
                         <div className='fs-5'>
                            <p>Our travel agency is a private retailer or public service that provides travel and tourism-related services.</p>
                            <p><i className="fas fa-envelope me-2"></i> sunny@travel.com</p>
                            <p><i className="fas fa-phone-alt me-2"></i> +8801574832566</p>
                            <p><i className="fas fa-map-marker-alt me-2"></i> Gulshan-2,Dhaka,BD</p>
                         </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <h2>Our Recent Posts</h2>
                        <h5 className="text-success mt-4">Visit Thailand, Bali And China <br /> <span className="fs-6 text-light">12 September,2019</span></h5>
                        <h5 className="text-success">The Sound Of Our Jungle <br /> <span className="fs-6 text-light">23 March,2021</span></h5>
                        <h5 className="text-success">New Year, New Resolutions! <br /> <span className="fs-6 text-light">1 january,2021</span></h5>
                    </div>
                    <div className="col-6 col-md-3">
                        <h3>Subscribe to our Newsletter</h3>
                        <form className="ps-5">
                            <input  className="form-control w-75 mt-3" type="text" placeholder="name" />
                            <input className="form-control w-75 mt-2" type="email" placeholder="email" />
                            
                        </form>
                        <button className="btn btn-info mt-3 w-50 pe-4">SUBSCRIBE</button>
                    </div>
                    <div className="col-6 col-md-3">
                        <h4>Follow Us</h4>
                        <p><i className="fab fa-facebook"></i></p>
                        <p><i className="fab fa-instagram me-2"></i></p>
                        <p><i className="fab fa-twitter me-2"></i></p>
                        <p><i className="fab fa-youtube me-2"></i></p>
                    </div>
                </div>
                <div className="row mt-4">
                    <p>Copyright <span>&copy;</span> 2021 Sunny-Travel. Developed By Rashedul Islam</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;