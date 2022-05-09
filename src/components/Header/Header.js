import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    };

    if(!user) {
        toast()
    }

    return (
        <div>
            <Navbar className='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Laptop Galaxy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to='/home'>HOME</Nav.Link>
                            <Nav.Link as={Link} to='/products'>PRODUCTS</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to='/manageitems'>MANAGE ITEMS</Nav.Link>
                                    <Nav.Link as={Link} to='/myitems'>MY ITEMS</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button onClick={handleSignOut} className='button'>SignOut</button>
                                    :

                                    <Nav.Link as={Link} to='/login'>LOGIN/SIGNUP</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;