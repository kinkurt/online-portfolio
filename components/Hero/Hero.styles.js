import image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
    background: none;
    padding: 10px 10px;
`;

export const Content = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;

    div{

        flex-grow: 2;
        align-items: flex-end;
        justify-content: center;
        text-align: center;

        p{
            color: grey;
        }

        h1{
            align-items: center;
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
        }

    }
`;

export const ProfileImg = styled.img`
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    width: 330px;
    height: 330px;

    @media screen and (max-width: 500px){
    width: 200px;
    height: 200px;
    }

    @media screen and (max-width: 200px){
    width: 100px;
    height: 100px;
    }
`;






