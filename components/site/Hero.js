import Image from 'next/image';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
import { Container, Eyebrow, Button } from './ui';

const Wrap = styled.section`
    padding: 96px 0 112px;

    @media (max-width: 768px) {
        padding: 56px 0 72px;
    }
`;

const Inner = styled(Container)`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 64px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

const Title = styled.h1`
    margin: 0 0 12px;
    font-size: clamp(2.5rem, 6vw, 4rem);
    letter-spacing: -0.03em;

    span {
        color: var(--accent);
    }
`;

const Role = styled.p`
    margin: 0 0 24px;
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    font-weight: 600;
    color: var(--text);
`;

const Lead = styled.p`
    max-width: 34rem;
    margin: 0 0 36px;
    color: var(--muted);
    font-size: 1.1rem;
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const Photo = styled.div`
    width: 280px;
    height: 280px;
    border-radius: 50%;
    overflow: hidden;
    border: 6px solid var(--surface);
    box-shadow: var(--shadow-hover);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        order: -1;
        width: 180px;
        height: 180px;
    }
`;

const Hero = () => (
    <Wrap id="top">
        <Inner>
            <div>
                <Eyebrow>Durban, South Africa</Eyebrow>
                <Title>
                    Hi, I&apos;m <span>Kurt Kin</span>
                </Title>
                <Role>Head of Technology Support &amp; Software Developer</Role>
                <Lead>
                    I build software and look after everything AI, MI and IT at Connect iQ.
                </Lead>
                <Actions>
                    <Button href="#projects">
                        View projects <FiArrowRight aria-hidden="true" />
                    </Button>
                    <Button href="#contact" $variant="secondary">
                        Get in touch
                    </Button>
                </Actions>
            </div>
            <Photo>
                <Image src="/KKpic.jpg" alt="Kurt Kin" width={280} height={280} priority />
            </Photo>
        </Inner>
    </Wrap>
);

export default Hero;
