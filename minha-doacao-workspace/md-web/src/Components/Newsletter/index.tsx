import React from 'react';
import { Button, Form } from 'react-bootstrap';
import * as S from './styles';

function Newsletter() {
  return (
    <S.Container>
      <S.NewsletterItensContainer>
        <h2>Newsletter</h2>
        <p>Receba as atualizações sobre campanhas.</p>
        <Form>
          <Form.Group id="NewsletterInputContainer">
            <Form.Control type="email" placeholder="E-mail" />
            <Button id="newsletterButton" type="submit" variant="warning">Enviar</Button>
          </Form.Group>
        </Form>
      </S.NewsletterItensContainer>

    </S.Container>
  );
}
export default Newsletter;
