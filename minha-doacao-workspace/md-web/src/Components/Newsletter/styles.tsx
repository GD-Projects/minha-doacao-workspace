import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height:36vh;
background-color: #38A3A5;
display: flex;
justify-content: flex-end;

#logoImg{

    //justify-self: flex-end;
    height:36vh;
}
`;

export const NewsletterItensContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
color: #F1F2F5; 
padding: 2% 0% 4% 0%;
justify-self:center;
position: relative;
right: 170px;
`;

export const NewsletterInputContainer = styled.div`
display: flex;
#newsletterButton {
    color: #1D272E;
    background-color: #FFB84E;
    
}
`;
