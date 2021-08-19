import { Wrapper, Content } from './Footer.styles';
import Image from 'next/image';

//https://react-icons.github.io/react-icons/icons?name=ai
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => (
    <Wrapper>
        <Content>
            <div>
            <p>
                Website by: Kurt Kin <br />
                <a href="mailto:hege@example.com">kin.kurt@gmail.com</a>
            </p>
            </div>
            
            <div>
            <a href="https://www.linkedin.com/in/kurt-kin-b76a8b97" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="hover" />
            </a>

            <a href="https://github.com/kinkurt" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="hover" />
            </a>
            <a href="https://twitter.com/therealCinnah" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle className="hover" />
            </a>
            <a href="https://www.instagram.com/cinnahbun/" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram className="hover" />
            </a>

            </div>
            
        </Content>
        
        
        
        
        
    </Wrapper>
);

export default Footer;