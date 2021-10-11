import { Wrapper, Content } from './Contact.styles';
import { Element } from 'react-scroll';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/ai";


const contact = () =>(
    <Element name="contact" className="element" >
    <Wrapper>
        <Content>
            <h1>Contact Details</h1>
            <p>You can contact me by sending a message to one of the following</p>
            <h3><a href="mailto:kin.kurt@gmail.com" target="_blank" rel="noopener noreferrer"><AiOutlineMail className="logo"/> Kin.kurt@gmail.com</a></h3>
            <h3><a href="https://www.linkedin.com/in/kurt-kin-b76a8b97" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="logo"/> Linkedin</a></h3>   
            <h3> <a href="https://github.com/kinkurt" target="_blank" rel="noopener noreferrer"><AiOutlineGithub className="logo"/> Github</a></h3>
        </Content>
    </Wrapper>  
    </Element>
);

export default contact;