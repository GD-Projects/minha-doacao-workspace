import styled from 'styled-components';

export const NavBar = styled.p`
    color: #38A3A5;
    font-size: 13pt;
    line-height: 16px;    
    margin-bottom: -15px;
    padding-right: 170px;
    @media(max-width: 1050px) {       
        padding-right: 50px;
    }
    @media(max-width: 780px) {
        position: absolute;       
        left: 90px;
        top: 18px;
    }
    @media(max-width: 430px) {              
        left: 50px;
        top: 18px;        
    }
`;

export const ButtonQD = styled.div`
#iDonate { 
    border-radius: 30px 30px 30px 30px; 
    padding-left: 40px;
    padding-right: 40px;    
    }
@media(max-width: 800px) {
    #iDonate {
        position: relative;           
        padding-left: 30px;
        padding-right: 30px;
        bottom: 203px;
        left : 400px;
    }
}
@media(max-width: 430px) {
    #iDonate {                   
        padding-left: 22px;
        padding-right: 22px;
        padding-top: 1px;
        padding-bottom: 1px;
        bottom: 153px;
        left : 266px;        
    }
}
@media(max-width: 380px) {
    #iDonate {
        bottom: 153px;
        left : 218px;        
    }
}
@media(max-width: 325px) {
    #iDonate {
        bottom: 153px;
        left : 168px;        
    }
}`;
export const Container = styled.div`



#navBar {
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.33);
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.33); 
    background-color: #F1F2F5;
    }

@media(min-width: 900px) {
    #navBar {    
    height: 55px;    
    }
}
#logo { 
    max-width: 65px;
    max-height: 65px;
    width: auto;
    height: auto;
    position: relative;
    
    }
@media(max-width: 800px) {
    #logo { 
        max-width: 60px;
        max-height: 60px;    
        }
}
@media(max-width: 430px) {
    #logo { 
       right: 13px;
        }
}
#icone { 
    max-width: 30px;
    max-height: 30px;
    width: auto;
    height: auto;    
    }
@media(max-width: 800px) {
    #icone {
        position: relative;        
        bottom: 248px;
        left: 560px;
        max-width: 35px;
        max-height: 35px;       
    }
}
@media(max-width: 430px) {
    #icone {                
        bottom: 238px;
        left: 280px;            
    }
}
@media(max-width: 380px) {
    #icone {                
        bottom: 238px;
        left: 220px;              
    }
}
@media(max-width: 325px) {
    #icone {                
        bottom: 238px;
        left: 172px;              
    }
}
#links {
    padding-right: 35px;
    color: #38A3A5;
}
@media(max-width: 800px) {
    #responsive-navbar-nav {
        height: 160px;
    }  
}
`;
