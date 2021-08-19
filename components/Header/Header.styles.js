import styled from 'styled-components';


export const Wrapper = styled.div`
background: #fff;
padding-top: 203px;
padding: 10px 15px;
position: sticky;
top: 0;
z-index: 100;
`;

export const Content = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
width: calc(100% - 3rem);
padding: 10px;
margin: 0 auto ;
`;


export const LogoImg = styled.img`
width: 120px;
margin-bottom: auto;
margin-top: auto;

@media screen and (max-width: 500px){
    width: 80px;
}
`; 

export const Nav = styled.div`

    padding: 10px;
    display: flex;
    justify-content: flex-end;
    font-size: 1.4rem;
    margin-bottom: auto;
    margin-top: auto;

    @media screen and (max-width: 768px){
        display: none;
    }
    a{
        position: relative;
        text-decoration: none;
        color: #000000;
        opacity: 60%;

        &:not(:last-child){
                margin-right: 32px; 
            }
            
        &::before{
                content: "";
                display:block;
                position: absolute;
                height: 5px;
                left: 0;
                right: 0;
                bottom: -15px;
                background: linear-gradient(to right, #D4FFFB, #59FFFB);
                opacity: 0;
                transition: opacity 300ms ease-in-out;
        }    

        &:hover{
        opacity: 100%;

        &::before{
                    opacity: 1;
                }
        }
    
    }
    
`;


export const Logos = styled.div`

    padding: 10px;
    justify-content: flex-end;
    margin-bottom: auto;
    margin-top: auto;

    @media screen and (max-width: 768px){
        display: none;
    }
    a{

        opacity: 60%;

        &:not(:last-child){
                margin-right: 10px; 
            }

        &:hover{
        opacity: 100%;
        }
    }

`;

export const Mobile = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        font-size: 1.8rem;
        cursor: pointer;
        color: black;
    }

`;

