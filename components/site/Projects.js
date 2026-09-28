import Image from 'next/image';
import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/projects.data';
import { courses } from '../../data/courses.data';
import { Container, Section, Eyebrow, SectionTitle } from './ui';

const allProjects = [
    ...projects,
    ...courses.map((course) => ({ ...course, isCourse: true })),
];

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
`;

const Card = styled.article`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
    box-shadow: var(--shadow);
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-hover);
    }
`;

const Thumb = styled.div`
    position: relative;
    aspect-ratio: 16 / 9;
    border-bottom: 1px solid var(--border);
    background: var(--bg);

    img {
        object-fit: cover;
        object-position: top;
    }
`;

const Body = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px 22px 22px;

    h3 {
        margin: 0 0 6px;
        font-size: 1.15rem;
    }

    p {
        flex: 1;
        margin: 0 0 18px;
        color: var(--muted);
        font-size: 0.95rem;
    }
`;

const Label = styled.span`
    align-self: flex-start;
    margin-bottom: 10px;
    font-family: var(--font-mono), monospace;
    font-size: 0.72rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted);
`;

const Links = styled.div`
    display: flex;
    gap: 20px;
    font-size: 0.9rem;
    font-weight: 600;

    a {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--accent);
    }

    a:hover {
        color: var(--accent-hover);
        text-decoration: underline;
    }
`;

const Projects = () => (
    <Section id="projects">
        <Container>
            <Eyebrow>Projects</Eyebrow>
            <SectionTitle>Things I&apos;ve built</SectionTitle>
            <Grid>
                {allProjects.map((project) => (
                    <Card key={project.title}>
                        <Thumb>
                            <Image
                                src={project.image}
                                alt={`Screenshot of ${project.title}`}
                                fill
                                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 360px"
                            />
                        </Thumb>
                        <Body>
                            {project.isCourse && <Label>Course project</Label>}
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <Links>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <FiExternalLink aria-hidden="true" /> Live site
                                </a>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <FiGithub aria-hidden="true" /> Code
                                    </a>
                                )}
                            </Links>
                        </Body>
                    </Card>
                ))}
            </Grid>
        </Container>
    </Section>
);

export default Projects;
