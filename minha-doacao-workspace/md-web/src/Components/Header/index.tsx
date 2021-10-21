import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as s from './style';
import logo from '../../assets/logo.jpeg';
import iconeLogin from '../../assets/iconeLogin.jpeg';

function Header() {
  return (

    <s.Container>
      <Navbar id="navBar" bg="light" expand="lg">
        <Container>
          <img id="logo" src={logo} alt="Logo Minha Doação" />
          <Navbar.Brand href="#home">
            <s.NavBar>
              <p>
                Minha
                <br />
                Doação
              </p>
            </s.NavBar>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="links" href="#home">Quem Somos</Nav.Link>
              <Nav.Link id="links" href="#home">Notícias</Nav.Link>
              <Nav.Link id="links" href="#home">Dúvidas</Nav.Link>
              <Nav.Link id="links" href="#link">Recebo doações</Nav.Link>
              <s.ButtonQD>
                <Button id="iDonate" variant="outline-warning">Quero Doar</Button>
                {' '}

              </s.ButtonQD>

            </Nav>
            <Nav.Link id="img" href="#link">
              <img id="icone" src={iconeLogin} alt="icone login do Minha Doação" />
            </Nav.Link>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </s.Container>

  );
}

export default Header;
