import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import '../style/Navbar.css';

const Navbars: React.FC = () => {
  return (
    <>
      <br />
      <Navbar style={{ backgroundColor: 'red'}} variant="dark" expand="lg" className="navbar-expand">
        <Container>
          {<Navbar.Brand href="/">HAPPY  <FontAwesomeIcon icon={faBirthdayCake} size="2x" />  CAKE</Navbar.Brand>}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/contact'>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;

