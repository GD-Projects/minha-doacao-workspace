import React from 'react';
import { Button, Form } from 'react-bootstrap';
import * as S from './styles';
import logo2 from '../../assets/logo2.png';

function Newsletter() {
  return (
    <S.Container>
      <S.NewsletterItensContainer>
        <h2>Newsletter</h2>
        <p>Receba as atualizações sobre campanhas.</p>
        <S.NewsletterInputContainer>
          <Form.Control type="email" placeholder="E-mail" />
          <Button variant="warning" id="newsletterButton">Enviar</Button>
        </S.NewsletterInputContainer>
      </S.NewsletterItensContainer>
      <img id="logoImg" src={logo2} alt="Logo do Minha Doação" />
    </S.Container>
  );
}
export default Newsletter;
