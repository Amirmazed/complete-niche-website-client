import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../Hook/useAuth';


const Header = () => {
    const {user, handleLogout} = useAuth();
    return (
        <>
<>
    <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
        <Container>
       
        <Navbar.Brand href="#home">Gadget-Pro</Navbar.Brand>
        <Navbar.Toggle />
        
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/allProducts" className="mx-3">Services</Nav.Link>
        {/* <Nav.Link as={Link} to="/addServices">Add a service</Nav.Link> */}
        <Nav.Link as={Link} to="/dashboard">Dashbaord</Nav.Link>
        <Nav.Link as={Link} to="/myOrder">My Orders</Nav.Link>
        {user?.email ?
                            <Button onClick={handleLogout} variant="light">Logout</Button> 
                             :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>

        </Navbar.Text>
        </Navbar.Collapse>

        
       
        </Container>
    </Navbar>

</>          
        </>
    );
};

export default Header;