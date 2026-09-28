import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import { Container } from './ui';

const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
];

const Bar = styled.header`
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(250, 250, 250, 0.85);
    backdrop-filter: saturate(180%) blur(12px);
    border-bottom: 1px solid var(--border);
`;

const Inner = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
`;

const Logo = styled.a`
    display: flex;
    align-items: center;
`;

const Links = styled.nav`
    display: flex;
    gap: 32px;
    font-size: 0.95rem;
    color: var(--muted);

    a {
        transition: color 0.2s;
    }

    a:hover {
        color: var(--text);
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const MenuButton = styled.button`
    display: none;
    padding: 8px;
    border: 0;
    background: none;
    color: var(--text);
    font-size: 1.4rem;
    line-height: 0;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

const MobileMenu = styled.nav`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 24px 16px;
        border-top: 1px solid var(--border);

        a {
            padding: 14px 0;
            border-bottom: 1px solid var(--border);
            font-size: 1.05rem;
        }

        a:last-child {
            border-bottom: 0;
        }
    }
`;

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);

    return (
        <Bar>
            <Inner>
                <Logo href="#top" aria-label="Kurt Kin, back to top" onClick={close}>
                    <Image src="/BLNB.svg" alt="" width={96} height={34} priority />
                </Logo>
                <Links aria-label="Main">
                    {links.map(({ href, label }) => (
                        <a key={href} href={href}>{label}</a>
                    ))}
                </Links>
                <MenuButton
                    type="button"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </MenuButton>
            </Inner>
            {isOpen && (
                <MobileMenu aria-label="Mobile">
                    {links.map(({ href, label }) => (
                        <a key={href} href={href} onClick={close}>{label}</a>
                    ))}
                </MobileMenu>
            )}
        </Bar>
    );
};

export default Nav;
