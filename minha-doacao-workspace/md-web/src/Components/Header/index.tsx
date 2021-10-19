import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as s from './style';

function Header() {
  return (
    <div>
      <s.Container>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Minha Doação</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link id="quemSomos" href="#home">Quem Somos</Nav.Link>
                <Nav.Link id="noticias" href="#home">Notícias</Nav.Link>
                <Nav.Link id="duvidas" href="#home">Dúvidas</Nav.Link>
                <Nav.Link id="receboDoacoes" href="#link">Recebo doações</Nav.Link>
                <Button id="bt" variant="outline-warning">Quero Doar</Button>
                {' '}

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </s.Container>
    </div>
  );
}

export default Header;
