import { useEffect } from 'react';
import styled from 'styled-components';
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';
import { skills } from '../../data/skills.data';
import { livedIn, visited } from '../../data/travel.data';
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

const Places = styled.div`
    margin-top: 28px;

    h3 {
        margin: 0 0 8px;
        font-size: 0.95rem;
    }
`;

// Windows has no flag emojis; the polyfill font draws them there and is skipped elsewhere.
const Flags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 0 0 18px;
    padding: 0;
    list-style: none;
    font-family: 'Twemoji Country Flags', var(--font-sans), system-ui, sans-serif;
    font-size: 1.6rem;
    line-height: 1;

    li {
        cursor: default;
    }
`;

// Two regional-indicator letters make a flag emoji, e.g. 'ZA' -> 🇿🇦.
const flagEmoji = (code) =>
    String.fromCodePoint(...[...code].map((letter) => 0x1f1a5 + letter.charCodeAt(0)));

const FlagList = ({ countries }) => (
    <Flags>
        {countries.map(({ name, code }) => (
            <li key={code} title={name}>
                <span role="img" aria-label={name}>{flagEmoji(code)}</span>
            </li>
        ))}
    </Flags>
);

const About = () => {
    useEffect(() => {
        polyfillCountryFlagEmojis();
    }, []);

    return (
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
                            Outside of work I play chess, and I&apos;ve represented South Africa
                            at it. I also enjoy strategy games, travelling and spending time
                            with friends.
                        </p>
                        <Places>
                            <h3>Lived in</h3>
                            <FlagList countries={livedIn} />
                            <h3>Visited</h3>
                            <FlagList countries={visited} />
                        </Places>
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
};

export default About;
