import Link from 'next/link';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { V1GlobalStyle } from './GlobalStyle';

// Small floating button that takes visitors back to the current design
const VersionSwitch = styled(Link)`
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 200;
    padding: 10px 16px;
    border-radius: 999px;
    background: #0f172a;
    color: #ffffff;
    font-size: 14px;
    text-decoration: none;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);

    &:hover {
        background: #0f766e;
    }
`;

export default function Layout({ children }) {
    return (
        <>
            <V1GlobalStyle />
            <Header />
            <div>{children}</div>
            <Footer />
            <VersionSwitch href="/">&larr; New version</VersionSwitch>
        </>
    )
}
