import React from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
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
                <Nav className="ms-auto">
                <Nav.Link as={Link} to="/homepage" className="fw-bold">Home</Nav.Link>
                <Nav.Link as={Link} to="/blog" className="fw-bold">Blog</Nav.Link>
                <Nav.Link as={Link} to="/about" className="fw-bold">About Us</Nav.Link>
                </Nav>
              
                <nav className="d-flex align-items-center">
                  
                  <div className="buttonss">
                  {
                    user.displayName && <div className="dyna-route">
                        
                            {/* <img className="w-25 p-0 ms-5 rounded-pill" src={user?.photoURL} alt="" /> */}
                            <p className='text-light ps-3 pt-2'>{user?.displayName}</p>
                        
                          <NavDropdown id="collasible-nav-dropdown">
                           <div>
                           {
                            user.displayName ? <h6 className="text-dark fw-bold ms-1 fs-5 mt-3">{user?.displayName} </h6>
                            :
                            <p className="text-dark fw-bold ms-3 mt-2">{user?.email}</p>
                           }
                    
                           </div>
                           <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/myorders">My Orders</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/allbooking">All Orders</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/addtour">Add Tour</NavDropdown.Item>
                            <NavDropdown.Divider />
                            {
                                user.email && <button onClick={logOut} className="btn btn-danger ms-4 head-button">Log Out</button>
                            }
                        </NavDropdown>
                 
                    </div>
                }
                 {
                        (!user?.email) && <Link to="/signin" className="btn btn-danger signin  fw-bold">Sign In</Link> 
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


                 