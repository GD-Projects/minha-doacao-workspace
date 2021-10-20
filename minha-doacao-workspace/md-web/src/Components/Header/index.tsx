import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as s from './style';
import logo from '../../assets/logo.jpeg';
import iconeLogin from '../../assets/iconeLogin.jpeg';

function Header() {
  return (

    <s.Container>
      <Navbar bg="light" expand="md">
        <Container>
          <img id="logo" src={logo} alt="Logo Minha Doação" />
          <Navbar.Brand href="#home">Minha Doação</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="whoWeAre" href="#home">Quem Somos</Nav.Link>
              <Nav.Link id="news" href="#home">Notícias</Nav.Link>
              <Nav.Link id="doubt" href="#home">Dúvidas</Nav.Link>
              <Nav.Link id="donations" href="#link">Recebo doações</Nav.Link>
              <s.ButtonQD>
                <Button id="iDonate" variant="outline-warning">Quero Doar</Button>
                {' '}

              </s.ButtonQD>

            </Nav>
            <Nav.Link id="img" href="#link">
              <img id="icne" src={iconeLogin} alt="icone login do Minha Doação" />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </s.Container>

  );
}

export default Header;
