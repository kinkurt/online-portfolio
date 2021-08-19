
import { Wrapper, Content, ProfileImg } from './Intro.styles'
import { Element } from 'react-scroll';

const Intro = () => (
    <Element name="intro" className="element" >
    <Wrapper>
        <Content>
             <ProfileImg src= {"/KKpic.jpg"} alt='Profile pic' />
                <div>
                <h1>
                    I&apos;m 
                     <span> Kurt</span> Kin</h1>
                
                <p>
                    This is my online portfolio where I implement the knowledge, skills and standards I have learnt.
                </p>
                </div>
                

        </Content>
    </Wrapper>
    </Element>
);


export default Intro;
