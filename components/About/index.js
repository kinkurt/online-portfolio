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
                    Hello, I&apos;m Kurt. I&apos;m a developer trying to improve my skills in React. Recently graduated and looking for a job in Front end development.
                    </p>
              <p>
                I&apos;m a South African with a Bachelors Degree in Computer and Information Sciences in Application Development with a distinction from Varsity College.
              </p>
              <p>
              In my free time I play some chess, strategic online games and enjoying spending time with friends (now online due to recent events).
              </p> 

              <h3>Career Objectives</h3>
              <p>
                  I am a motivated team player and an aspiring web developer. I like to learn new skills to improve myself. To join a project where I can be proud and say that I helped out with that.
             </p>
              <p>
                <h3>Programming Languages </h3>
                    <ul>
                      <li>
                        C#
                      </li>
                      <li>
                        Java (Android)
                      </li>
                      <li>
                        JavaScript
                      </li>
                      <li>
                        HTML
                      </li>
                      <li>
                        SQL
                      </li>
                    </ul>
                <h3>Front End Development </h3>
                    <ul>
                    <li>
                        React.js (Next, Gatsby)
                    </li>
                  </ul>
                <h3>Styling</h3>
                <ul>
                    <li>
                        Styled components
                    </li>
                    <li>
                        Material-ui
                    </li>
                </ul>
              </p>
                
            </Content>
        </Wrapper>
        
        </Element>
        
    </>
     
);

export default AboutPage;