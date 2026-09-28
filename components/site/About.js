import styled from 'styled-components';
import { skills } from '../../data/skills.data';
import { Container, Section, Eyebrow, SectionTitle, Tags, Tag } from './ui';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 64px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

const Text = styled.div`
    p {
        margin: 0 0 18px;
        color: var(--muted);
    }

    p:first-child {
        color: var(--text);
        font-size: 1.1rem;
    }
`;

const SkillGroup = styled.div`
    margin-bottom: 24px;

    h3 {
        margin: 0 0 10px;
        font-size: 0.95rem;
    }
`;

const About = () => (
    <Section id="about">
        <Container>
            <Eyebrow>About</Eyebrow>
            <SectionTitle>A bit about me</SectionTitle>
            <Grid>
                <Text>
                    <p>
                        I&apos;m a software developer and Head of Technology Support at
                        Connect iQ in Durban, where I look after everything AI, MI and IT
                        alongside building software.
                    </p>
                    <p>
                        I hold a Bachelor&apos;s degree in Computer and Information Sciences
                        in Application Development from Varsity College, which I completed
                        with a distinction.
                    </p>
                    <p>
                        Outside of work I enjoy chess, strategy games and spending time with
                        friends.
                    </p>
                </Text>
                <div>
                    {skills.map(({ group, items }) => (
                        <SkillGroup key={group}>
                            <h3>{group}</h3>
                            <Tags>
                                {items.map((item) => (
                                    <Tag key={item}>{item}</Tag>
                                ))}
                            </Tags>
                        </SkillGroup>
                    ))}
                </div>
            </Grid>
        </Container>
    </Section>
);

export default About;
