import { Wrapper, Content } from './About.styles';
import { Element } from 'react-scroll';

const AboutPage = () => (
    <>
    <Element name="about" className="element" >
        <Wrapper>
            <Content>
                <h1>
                    About Me
                </h1>

                <p>
                    Hello, I&apos;m Kurt. I&apos;m a developer trying to improve my skills in React. Recently graduated and looking for a job in React.
                    </p>
              <p>
                I&apos;m a South African with a Bachelors Degree in Computer and Information Sciences in Application Development with a distinction from Varsity College.
              </p>
              <p>
              In my free time I play some chess, strategic online games and enjoying spending time with friends (now online due to recent events).
                  </p> 
                
            </Content>
        </Wrapper>
        
        </Element>
        
    </>
     
);

export default AboutPage;