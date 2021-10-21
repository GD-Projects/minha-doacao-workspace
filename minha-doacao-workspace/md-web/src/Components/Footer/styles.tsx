import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height:38vh;
background-color: #22577A;
display: flex;
justify-content: center;
padding: 5vh 8vh 5vh 8vh;
`;
// PRIMEIRO CONTAINER
export const leftContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: red;
width:28%;
`;

export const logo = styled.div`
display: flex;
color: #F1F2F5;
height: 50%;
img {
    padding-right: 10%;
}
`;

export const social = styled.div`
display: flex;
align-items: center;
height: 50%;
img {
    height: 45%;
    padding-right: 13%;
}
`;

// SEGUNDO CONTAINER
export const centerContainer = styled.div`
display: flex;
width: 33%;
flex-wrap: wrap;
color: #F1F2F5;
background-color: blue;
`;

export const firstText = styled.div`

`;

export const secondText = styled.div`
`;

export const safeIcons = styled.div`

`;

// TERCEIRO CONTAINER
export const rightContainer = styled.div`
width: 30%;
color: #F1F2F5;
background-color: green;
`;
export const causeTitle = styled.div`
color:#B0ED4C;
`;

export const textContainer = styled.div`
display: flex;
`;

export const firstRightText = styled.div`
`;

export const secondRightText = styled.div`
`;
