import image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
    background: none;
    padding: 0 10px;
    margin-top: 20vh;
    margin-bottom: 30vh;
`;

export const Content = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;

    div{

        //flex-grow: 2;
        align-items: flex-end;
        justify-content: center;
        text-align: center;
        padding: 20px;

        p{
            font-size: 30px;
            color: darkslategray;
        }

        h1{
            
            align-items: center;
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            font-size: 70px;
        }

    }
`;

export const ProfileImg = styled.img`
    height: 100px;
    border: 6px solid #ddd;
    border-radius: 50%;
    object-fit: cover;
    width: 300px;
    height: 300px;

    @media screen and (max-width: 500px){
    width: 200px;
    height: 200px;
    }

    @media screen and (max-width: 200px){
    width: 100px;
    height: 100px;
    }
`;






