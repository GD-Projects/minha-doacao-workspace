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
      <S.LeftContainer>
        <S.Logo>
          <img src={logoFooter} alt="icone do site no rodapé" />
          <h2>
            Minha
            <br />
            Doação
          </h2>
        </S.Logo>
        <S.Social>
          <img src={instagram} alt="icone do instagram" />
          <img src={facebook} alt="icone do facebook" />
          <img src={linkedin} alt="icone do linkedin" />
          <img src={youtube} alt="icone do youtube" />
          <p>Contatos</p>
        </S.Social>
      </S.LeftContainer>

      <S.CenterContainer>
        <S.CenterTextContainer>
          <S.FirstText>
            <p>Contato</p>
            <p>Quero doar</p>
            <p>Quem somos</p>
            <p>Como funciona</p>
          </S.FirstText>
          <S.SecondText>
            <p>ONGs associadas</p>
            <p>Empresas parceiras</p>
            <p>Trabalhe conosco</p>
            <p>Termos do site</p>
          </S.SecondText>
        </S.CenterTextContainer>

        <S.SafeIcons>
          <img src={safeBrowsing} alt="icone de safe browsing" />
          <img src={ssl} alt="icone de navegação segura com ssl" />
        </S.SafeIcons>
      </S.CenterContainer>

      <S.RightContainer>
        <S.CauseTitle>
          <p>Causas</p>
        </S.CauseTitle>
        <S.TextContainer>
          <S.RightFirstText>
            <p>Idosos</p>
            <p>Covid-19</p>
            <p>LGBTQI+</p>
            <p>Educação</p>
          </S.RightFirstText>
          <S.RightSecondText>
            <p>Ambiental</p>
            <p>Lutas raciais</p>
            <p>Lutas de gênero</p>
            <p>Alimentação</p>

          </S.RightSecondText>
        </S.TextContainer>
      </S.RightContainer>

    </S.Container>
  );
}

export default Footer;
