
import Image from 'next/image';
import { useState } from 'react';

// https://www.npmjs.com/package/react-scroll
import { Link as LinkScroll } from 'react-scroll';
import headers from '../../data/headers.data'

//https://react-icons.github.io/react-icons/
import { FaBars } from 'react-icons/fa';


import NavDropDown from '../NavDropDown';

import { Wrapper, Content, LogoImg, Nav, Logos, Mobile} from './Header.styles';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    
    return(
    <Wrapper>
        <Content>
                <LogoImg src= {'BLNB.svg'} alt='KK-logo' />
                
            <Nav>
                {headers.map((headerItem) =>(
                    <LinkScroll 
                    activeClass="active"
                    to ={headerItem.path}
                    spy={true}
                    smooth={true}
                    offset= {-100}
                    duration={500}
                    key={headerItem.label}
                    >
                        {headerItem.label}
                    </LinkScroll>
                ))}
                
            </Nav>

            <Logos>
                <a href="https://www.linkedin.com/in/kurt-kin-b76a8b97" target="_blank" rel="noopener noreferrer">
                    <Image src={"/linkedin.png"} alt="linkedin" width={20} height={20}/>
                </a>
                <a href="https://github.com/kinkurt" target="_blank" rel="noopener noreferrer">
                    <Image src={"/GitHub-Mark-32px.png"} alt="Github" width={20} height={20}/>
                </a>
                
            </Logos>
                <Mobile onClick={toggle}>
                    <FaBars />
                    <NavDropDown isOpen={isOpen} toggle={toggle}/>
                </Mobile>
        </Content>
        
    </Wrapper>
    )};

export default Header; 