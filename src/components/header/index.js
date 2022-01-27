import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'


const Header = ({title}) => {
    return(
        <Navbar  className="bg"  variant="dark">
        <Container>
            <Navbar.Brand href="/" className="letter">{title}</Navbar.Brand>
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/buscar">Buscar</Nav.Link>
                </Nav>
        </Container>
        </Navbar>
    )
}

export default Header;