import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import '../style/home.css';

const Home: React.FC = () => {
  return (
    <Container className="container-home" style={{minHeight: '100vh'}}>
    <Row>
      <Col className="home-cake">
        <h1>Bienvenido a <b>Happy Cake</b></h1>
        <p>El lugar donde los "Pasteles Felices"</p>
        <br />
        <FontAwesomeIcon icon={faBirthdayCake} size="6x" />
      </Col>
    </Row>
  </Container>
  );
}

export default Home;
