import Link from 'next/link';
import styled from 'styled-components';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { Container } from './ui';

const Wrap = styled.footer`
    padding: 32px 0;
    color: var(--muted);
    font-size: 0.9rem;
`;

const Inner = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    a {
        display: inline-flex;
        transition: color 0.2s;
    }

    a:hover {
        color: var(--text);
    }

    svg {
        font-size: 1.2rem;
    }
`;

// Link to the original design, kept at /v1
const VersionLink = styled(Link)`
    padding: 4px 10px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 0.8rem;
`;

const Footer = () => (
    <Wrap>
        <Inner>
            <span suppressHydrationWarning>&copy; {new Date().getFullYear()} Kurt Kin</span>
            <Right>
                <a href="https://www.linkedin.com/in/kurt-kin-b76a8b97" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FiLinkedin />
                </a>
                <a href="https://github.com/kinkurt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FiGithub />
                </a>
                <VersionLink href="/v1">Version 1</VersionLink>
            </Right>
        </Inner>
    </Wrap>
);

export default Footer;
