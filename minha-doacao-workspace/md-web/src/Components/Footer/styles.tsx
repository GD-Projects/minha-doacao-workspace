import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height:38vh;
background-color: #22577A;
display: flex;
justify-content: center;
padding: 5vh 1vh 5vh 4vh;
@media (max-width: 700px) {
    height:23vh;
    padding: 0px;
}
@media (max-width: 480px) {
    height:15vh;
}
@media (max-width: 405px) {
    height:12vh;
}
`;
// PRIMEIRO CONTAINER
export const LeftContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width:30%;
@media (max-width: 1000px) {
    width:28%;
}
@media (max-width: 700px) {
    flex-direction: row;
    h2 {
        display: none;
    }
}
@media (max-width: 700px) {
    width: 100%;
    justify-content: center;
    align-items: center;

}
`;

export const Logo = styled.div`
display: flex;
align-items: center;
color: #F1F2F5;
height: 50%;
img {
    padding-right: 10%;
}
@media (max-width: 840px) {
img {
    height: 70px;
}
h2 {
    font-size: 25px;
}
@media (max-width: 580px) {
    img {
    height: 55px;
    }
}
}
`;

export const Social = styled.div`
display: flex;
align-items: center;
height: 50%;
img {
    height: 45%;
    padding-right: 13%;
}
p {
    display: none;
}
@media (max-width: 1000px) {
    img {
        height: 35%;
    }
}
@media (max-width: 840px) {
    img {
        height: 28%;
    }
}
@media (max-width: 700px) {
    width:80%;
    justify-content: center;
    img {
        height: 70%;
        padding-left: 5px;
        padding-right: 25px;
    }
    p {
        display: flex;
        align-items: center;
        color: #F1F2F5;
        font-size: 25px;
        padding-top: 12px;
    }
}
@media (max-width: 580px) {
    img {
        height: 55%;
        padding-left: 5px;
        padding-right: 25px;
    }
    p {
        display: flex;
        color: #F1F2F5;
        font-size: 20px;
}
}
@media (max-width: 405px) {
    img {
        height: 55%;
        padding-left: 5px;
        padding-right: 13px;
    }
}
`;

// SEGUNDO CONTAINER
export const CenterContainer = styled.div`
display: flex;
width: 33%;
flex-wrap: wrap;
color: #F1F2F5;
@media (max-width: 1000px) {
    font-size: 15px;
}
@media (max-width: 840px) {
    font-size: 12px;
}
@media (max-width: 700px) {
    display: none;
}
`;

export const CenterTextContainer = styled.div`
display: flex;
width: 100%;
`;

export const FirstText = styled.div`
display: flex;
flex-direction: column;
line-height: 15px;
padding-right: 10%;
`;

export const SecondText = styled.div`
display: flex;
flex-direction: column;
line-height: 15px;
`;

export const SafeIcons = styled.div`
display: flex;
height: 35px;
width: 45px;
img {
    padding-right: 45px;
}
@media (max-width: 840px) {
    height: 30px;
    width: 35px;
}
`;

// TERCEIRO CONTAINER
export const RightContainer = styled.div`
width: 22%;
color: #F1F2F5;
@media (max-width: 1000px) {
    font-size: 15px;
}
@media (max-width: 840px) {
    font-size: 12px;
}
@media (max-width: 700px) {
    display: none;
}
`;
export const CauseTitle = styled.div`
color:#B0ED4C;
`;

export const TextContainer = styled.div`
display: flex;
`;

export const RightFirstText = styled.div`
display: flex;
flex-direction: column;
line-height: 15px;
padding-right: 10%;
`;

export const RightSecondText = styled.div`
display: flex;
flex-direction: column;
line-height: 15px;
padding-right: 10%;
`;
