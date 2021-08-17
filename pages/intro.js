import styled from 'styled-components';
import { Wrapper, Content, ProfileImg } from '../styles/Intro.styles'
import { Element } from 'react-scroll';

const Intro = () => (
    <Element name="intro" className="element" >
    <Wrapper>
        <Content>
             <ProfileImg Image src= {"/KKpic.jpg"} alt='Profile pic' />
                <div>
                <h1>
                    I&apos;m Kurt Kin
                </h1>
                <p>
                    This is my online portfolio where I try to implement all the knowledge I have learnt.
                </p>
                </div>
                

        </Content>
    </Wrapper>
    </Element>
);


export default Intro;

