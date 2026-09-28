import styled from 'styled-components';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { Container, Section, Eyebrow, SectionTitle } from './ui';

const contacts = [
    { href: 'mailto:kin.kurt@gmail.com', label: 'Email', value: 'kin.kurt@gmail.com', Icon: FiMail },
    { href: 'https://www.linkedin.com/in/kurt-kin-b76a8b97', label: 'LinkedIn', value: 'Kurt Kin', Icon: FiLinkedin },
    { href: 'https://github.com/kinkurt', label: 'GitHub', value: 'kinkurt', Icon: FiGithub },
];

const Intro = styled.p`
    max-width: 36rem;
    margin: -16px 0 40px;
    color: var(--muted);
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
`;

const Item = styled.a`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 22px;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--bg);
    transition: border-color 0.2s, transform 0.2s;

    svg {
        flex-shrink: 0;
        font-size: 1.4rem;
        color: var(--accent);
    }

    span {
        display: block;
        color: var(--muted);
        font-size: 0.85rem;
    }

    strong {
        font-weight: 600;
        word-break: break-word;
    }

    &:hover {
        border-color: var(--accent);
        transform: translateY(-2px);
    }
`;

const Contact = () => (
    <Section id="contact" $alt>
        <Container>
            <Eyebrow>Contact</Eyebrow>
            <SectionTitle>Get in touch</SectionTitle>
            <Intro>
                Whether it&apos;s a project, a role or just a chat about tech, I&apos;d be
                happy to hear from you.
            </Intro>
            <Grid>
                {contacts.map(({ href, label, value, Icon }) => (
                    <Item
                        key={label}
                        href={href}
                        {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                        <Icon aria-hidden="true" />
                        <div>
                            <span>{label}</span>
                            <strong>{value}</strong>
                        </div>
                    </Item>
                ))}
            </Grid>
        </Container>
    </Section>
);

export default Contact;
