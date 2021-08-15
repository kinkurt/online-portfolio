import Link from 'next/link';
import Image from 'next/image';

import { Wrapper, Content, LogoImg, Nav, Logos} from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            
            <LogoImg Image src= {"/BLNB.svg"} alt='KK-logo' />
            
            

            <Nav>
                <Link href ="/" >Home</Link>
                <Link href="/projects" >Projects</Link>
                <Link href="/about" >About</Link>
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