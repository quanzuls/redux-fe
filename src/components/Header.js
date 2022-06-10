import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';

function Header(props) {
    const listUsers = useSelector((state) => state.user.listUsers);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"></Nav.Link>
                            <Nav.Link href="#link"></Nav.Link>
                            <NavDropdown title={`Total (${listUsers.length}) Users`} id="basic-nav-dropdown">

                                {listUsers && listUsers.length > 0 &&

                                    listUsers.map(item => (

                                        <NavDropdown.Item key={`user-${item.id}`} href="#">{item.email}</NavDropdown.Item>

                                    ))
                                }

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;