import styled from 'styled-components';
import { experience } from '../../data/experience.data';
import { Container, Section, Eyebrow, SectionTitle, Tags, Tag } from './ui';

const List = styled.ol`
    display: grid;
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const Company = styled.li`
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 32px;
    padding: 28px;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--bg);

    h3 {
        margin: 0 0 4px;
        font-size: 1.15rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 22px;
    }
`;

const Details = styled.p`
    margin: 0;
    color: var(--muted);
    font-size: 0.9rem;
`;

// Vertical timeline linking the roles held at one company
const Roles = styled.ol`
    display: grid;
    gap: 22px;
    margin: 0;
    padding: 0 0 0 22px;
    list-style: none;
    border-left: 2px solid var(--border);
`;

const Role = styled.li`
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 8px;
        left: -29px;
        width: 12px;
        height: 12px;
        border: 2px solid var(--accent);
        border-radius: 50%;
        background: var(--surface);
    }

    &:first-child::before {
        background: var(--accent);
    }

    h4 {
        margin: 0;
        font-size: 1.05rem;
    }

    p {
        margin: 8px 0 0;
    }
`;

const Period = styled.span`
    display: block;
    margin-top: 2px;
    color: var(--muted);
    font-family: var(--font-mono), monospace;
    font-size: 0.8rem;
`;

const RoleTags = styled(Tags)`
    margin-top: 12px;
`;

const Experience = () => (
    <Section id="experience" $alt>
        <Container>
            <Eyebrow>Experience</Eyebrow>
            <SectionTitle>Where I&apos;ve worked</SectionTitle>
            <List>
                {experience.map((job) => (
                    <Company key={job.company}>
                        <div>
                            <h3>{job.company}</h3>
                            <Details>{job.details}</Details>
                        </div>
                        <Roles>
                            {job.roles.map((role) => (
                                <Role key={`${role.title}-${role.period}`}>
                                    <h4>{role.title}</h4>
                                    <Period>{role.period}</Period>
                                    {role.description && <p>{role.description}</p>}
                                    {role.skills && (
                                        <RoleTags>
                                            {role.skills.map((skill) => (
                                                <Tag key={skill}>{skill}</Tag>
                                            ))}
                                        </RoleTags>
                                    )}
                                </Role>
                            ))}
                        </Roles>
                    </Company>
                ))}
            </List>
        </Container>
    </Section>
);

export default Experience;
