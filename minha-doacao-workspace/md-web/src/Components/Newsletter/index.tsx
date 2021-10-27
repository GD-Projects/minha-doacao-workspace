import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { emailPost } from '../../Services/newsLetterService';
import * as S from './styles';

function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <S.Container>
      <S.NewsletterItensContainer>
        <h2>Newsletter</h2>
        <p>Receba as atualizações sobre campanhas.</p>
        <Form>
          <Form.Group id="NewsletterInputContainer">
            <Form.Control type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button id="newsletterButton" type="submit" variant="warning" onClick={() => emailPost(email)}>Enviar</Button>
          </Form.Group>
        </Form>
      </S.NewsletterItensContainer>

    </S.Container>
  );
}
export default Newsletter;
