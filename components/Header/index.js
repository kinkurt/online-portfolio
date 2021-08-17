
import Image from 'next/image';

// https://www.npmjs.com/package/react-scroll
import { Link } from 'react-scroll';
import headerItems from './Header.data'

import { Wrapper, Content, LogoImg, Nav, Logos} from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
                <LogoImg src= {'BLNB.svg'} alt='KK-logo' />
                
            <Nav>
                {headerItems.map((headerItem, i) =>(
                    <Link 
                    activeClass="active"
                    to ={headerItem.path}
                    spy={true}
                    smooth={true}
                    offset= {-100}
                    duration={500}
                    key={i}
                    >
                        {headerItem.label}
                    </Link>
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
        </Content>
    </Wrapper>
);

export default Header; 