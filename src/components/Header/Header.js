import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
                            <Nav.Link to='/home' href="#home">HOME</Nav.Link>
                            <Nav.Link to='/products' href="#products">PRODUCTS</Nav.Link>
                            <Nav.Link to='/login' href="#login/signup">LOGIN/SIGNUP</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1>you have to make it as= link {}</h1>
        </div>
    );
};

export default Header;