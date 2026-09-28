import styled from 'styled-components';
import { inter, mono } from '../../lib/fonts';
import { GlobalStyle } from '../../styles/GlobalStyle';
import Nav from './Nav';
import Footer from './Footer';

const Shell = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: var(--font-sans), system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;

    main {
        flex: 1;
    }
`;

export default function Layout({ children }) {
    return (
        <Shell className={`${inter.variable} ${mono.variable}`}>
            <GlobalStyle />
            <Nav />
            <main>{children}</main>
            <Footer />
        </Shell>
    );
}
