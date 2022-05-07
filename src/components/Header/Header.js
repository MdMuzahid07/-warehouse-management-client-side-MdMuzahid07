import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Laptop Galaxy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to='/home'>HOME</Nav.Link>
                            <Nav.Link as={Link} to='/products'>PRODUCTS</Nav.Link>
                            <Nav.Link as={Link} to='/manageitems'>MANAGE ITEMS</Nav.Link>
                            <Nav.Link as={Link} to='/myitems'>MY ITEMS</Nav.Link>
                            <Nav.Link as={Link} to='/login'>LOGIN/SIGNUP</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;