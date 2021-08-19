import { CloseIcon, NavContainer,Icon,Wrapper,Menu } from './NavDropDown.styles';
import { Link as LinkScroll } from 'react-scroll';
import  headers  from '../../data/headers.data';
import Image from 'next/image';
import { Logos } from './NavDropDown.styles';

//https://www.youtube.com/watch?v=Nl54MJDR2p8
//Credit Brian Design with the design of the navbar and I was able to change it to fit my needs.

const NavDropDown = ({isOpen, toggle}) =>{
    
    return(
        <NavContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <Wrapper>
                <Menu>
                    {headers.map((headerItem) =>(
                    <LinkScroll 
                        activeClass="active"
                        to ={headerItem.path}
                        spy={true}
                        smooth={true}
                        offset= {-100}
                        duration={500}
                        key={headerItem.label}
                        onClick={toggle}
                    >   
                        {headerItem.label}
                    </LinkScroll>
                    ))}

                    
                </Menu>
                <Logos>
                <a href="https://www.linkedin.com/in/kurt-kin-b76a8b97" target="_blank" rel="noopener noreferrer">
                    <Image src={"/linkedin.png"} alt="linkedin" width={30} height={30}/>
                </a>
                <a href="https://github.com/kinkurt" target="_blank" rel="noopener noreferrer">
                    <Image src={"/GitHub-Mark-32px.png"} alt="Github" width={30} height={30}/>
                </a>
                    </Logos>
            </Wrapper>
        </NavContainer>
    );
}

export default NavDropDown;