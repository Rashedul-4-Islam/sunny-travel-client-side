import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home" className="logo"> <div>
            <img  src="./images/logo/Summer-Travel.png" alt="" /> 
              <h3 className="sunny">SUNNY TRAVEL</h3>
                </div> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/homepage">Home</Nav.Link>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
               
                {
                    user.displayName && <div className="dyna-route">
                    <Nav.Link as={Link} to="/mybooking">My Booking</Nav.Link>
                   <Nav.Link as={Link} to="/addtour">Add Tour</Nav.Link>
                    </div>
                }
                  <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                </Nav>
              
                <nav className="d-flex align-items-center">
                <div>
                    <img className="w-50 rounded-pill" src={user?.photoURL} alt="" />
                </div>
                  
                  <div className="buttonss">
                  {
                            user.displayName ? <p className="text-light me-3 mt-3">{user?.displayName} </p>
                            :
                            <p className="text-light me-3 mt-2">{user?.email}</p>
                        }
                    
                    {
                        user?.email ?  <div className="d-flex me-4">
                        {/* <button className="btn btn-warning head-button">Admin</button> */}
                        <button onClick={logOut} className="btn btn-danger ms-4 head-button">Log Out</button>
                        </div>  
                        :
                        <Link to="/signin" className="btn btn-danger me-3 fw-bold">Sign In</Link>
                        
                    }
                  
                  </div>
                </nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;


                 