import styled from 'styled-components';
import { Wrapper, Content, ProfileImg } from './Hero.styles'

const Hero = () => (
    <Wrapper>
        <Content>
             <ProfileImg Image src= {"/KKpic3.jpg"} alt='Profile pic' />
            
            
            <div>
                <h1>
                    Hello and welcome to my site!
                </h1>
                <p>
                    This is my online portfolio where I try to implement all the knowledge I have learnt.
                </p>
                
            </div>

        </Content>
    </Wrapper>
);


export default Hero;

