import { createGlobalStyle } from 'styled-components';

// Design tokens and base styles for the current design
export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #fafafa;
    --surface: #ffffff;
    --text: #0f172a;
    --muted: #64748b;
    --border: #e2e8f0;
    --accent: #0f766e;
    --accent-hover: #115e59;
    --accent-soft: #ccfbf1;
    --radius: 14px;
    --max-width: 1100px;
    --shadow: 0 1px 2px rgba(15, 23, 42, 0.06), 0 4px 16px rgba(15, 23, 42, 0.06);
    --shadow-hover: 0 2px 4px rgba(15, 23, 42, 0.06), 0 12px 32px rgba(15, 23, 42, 0.1);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-size: 17px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:focus-visible, button:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 4px;
  }

  section[id] {
    scroll-margin-top: 72px;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
      transition: none !important;
    }
  }
`;
