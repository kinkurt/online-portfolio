import styled from "styled-components";

export const Wrapper = styled.div`
    display: block;
    position: relative;
    background:white;
    //background-image: linear-gradient(to bottom right, white, #0CD3C6);
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    
`;

export const Content = styled.div`
    display:grid;

    a{
        text-decoration: none;
        color: black;
        padding: 5px;

        
    }

    .hover{
        font-size: 30px;
    
        &:hover{
            fill: #0CD3C6;
        }
    }
`;