import { Wrapper, Content } from './Contact.styles';
import { Element } from 'react-scroll';

const contact = () =>(
    <Element name="contact" className="element" >
    <Wrapper>
        <Content>
            <h1>Contact Me</h1>
            <p>You can contact me through <a href="https://www.linkedin.com/in/kurt-kin-b76a8b97" target="_blank" rel="noopener noreferrer">Linkedin</a> or <a href="mailto:kin.kurt@gmail.com" target="_blank" rel="noopener noreferrer"> Email</a>: kin.kurt@gmail.com</p>
            <p>If you would like to view my <a href="https://github.com/kinkurt" target="_blank" rel="noopener noreferrer">Github</a></p>
        </Content>
    </Wrapper>  
    </Element>
);

export default contact;