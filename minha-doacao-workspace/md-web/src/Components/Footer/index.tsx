import React from 'react';
import * as S from './styles';
import logoFooter from '../../assets/logoFooter.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png';
import safeBrowsing from '../../assets/safeBrowsing.png';
import ssl from '../../assets/ssl.png';

function Footer() {
  return (
    <S.Container>
      <S.leftContainer>
        <S.logo>
          <img src={logoFooter} alt="icone do site no rodapé" />
          <h2>
            Minha
            <br />
            Doação
          </h2>
        </S.logo>
        <S.social>
          <img src={instagram} alt="icone do instagram" />
          <img src={facebook} alt="icone do facebook" />
          <img src={linkedin} alt="icone do linkedin" />
          <img src={youtube} alt="icone do youtube" />
        </S.social>
      </S.leftContainer>

      <S.centerContainer>
        <S.firstText>
          <p>Contato</p>
          <p>Quero doar</p>
          <p>Quem somos</p>
          <p>Como funciona</p>
        </S.firstText>
        <S.secondText>
          <p>ONGs associadas</p>
          <p>Empresas parceiras</p>
          <p>Trabalhe conosco</p>
          <p>Termos do site</p>
        </S.secondText>
        <S.safeIcons>
          <img src={safeBrowsing} alt="icone de safe browsing" />
          <img src={ssl} alt="icone de navegação segura com ssl" />
        </S.safeIcons>
      </S.centerContainer>

      <S.rightContainer>
        <S.causeTitle>
          <p>Causas</p>
        </S.causeTitle>
        <S.textContainer>
          <S.firstRightText>
            <p>Idosos</p>
            <p>Covid-19</p>
            <p>LGBTQI+</p>
            <p>Educação</p>
          </S.firstRightText>
          <S.secondRightText>
            <p>Ambiental</p>
            <p>Lutas raciais</p>
            <p>Lutas de gênero</p>
            <p>Nós contra a fome</p>

          </S.secondRightText>
        </S.textContainer>
      </S.rightContainer>

    </S.Container>
  );
}

export default Footer;
