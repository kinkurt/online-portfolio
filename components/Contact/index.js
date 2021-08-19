import { Wrapper, Content } from './Contact.styles';
import { Element } from 'react-scroll';

const contact = () =>(
    <Element name="contact" className="element" >
    <Wrapper>
        <Content>
            <h1>Contact Details</h1>
            <p><a href="mailto:kin.kurt@gmail.com" target="_blank" rel="noopener noreferrer"><span>kin.kurt@gmail.com</span></a></p>
            <p><a href="https://www.linkedin.com/in/kurt-kin-b76a8b97" target="_blank" rel="noopener noreferrer"><span>Linkedin</span></a></p>
            <p><a href="https://github.com/kinkurt" target="_blank" rel="noopener noreferrer"><span>Github</span></a></p>
        </Content>
    </Wrapper>  
    </Element>
);

export default contact;