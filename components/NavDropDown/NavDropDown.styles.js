import styled from "styled-components";
import { FaBars, FaTimes } from 'react-icons/fa';

export const NavContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: white;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3ms ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

    `;

export const CloseIcon = styled(FaTimes)`
    color: black;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2.5rem;
    cursor: pointer;
    outline: none;
`;

export const Wrapper = styled.div`
    color:black;
`;

export const Menu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    font-size: 35px;

    a{
        align-self: center;
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 40px;
    }
    

    @media screen and (max-width){
        grid-template-rows: repeat(6,60px);
    };
`;

export const Logos = styled.div`
    display: flex;
    justify-content: center;
    `;