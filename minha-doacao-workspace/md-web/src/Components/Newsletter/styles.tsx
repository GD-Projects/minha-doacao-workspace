import styled from 'styled-components';
import logo2 from '../../assets/logo2.png';
import logo2Mobile from '../../assets/logo2mobile.png';

export const Container = styled.div`
width: 100%;
height:36vh;
background-color: #38A3A5;
display: flex;
justify-content: center;
background-image: url(${logo2});
background-repeat: no-repeat;
background-position: right;
background-size:contain;
@media(max-width: 650px) {
    background-image: url(${logo2Mobile});
    background-position: 115%;
}
@media(max-width: 440px) {
    background-position: 135%;
}
`;

export const NewsletterItensContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
color: #F1F2F5; 
text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);
padding: 4% 0% 4% 0%;
position: relative;
#NewsletterInputContainer{
    display: flex;
}
#newsletterButton {
    color: #1D272E;
    background-color: #FFB84E; 
}
@media(max-width: 490px) {
    align-items: flex-start;
    padding: 12% 5% 12% 5% ;
}

`;
