import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
`;

export const Section = styled.section`
  padding: 96px 0;
  background: ${({ $alt }) => ($alt ? 'var(--surface)' : 'transparent')};
  border-top: ${({ $alt }) => ($alt ? '1px solid var(--border)' : '0')};
  border-bottom: ${({ $alt }) => ($alt ? '1px solid var(--border)' : '0')};

  @media (max-width: 768px) {
    padding: 64px 0;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 8px;
  font-family: var(--font-mono), monospace;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
`;

export const SectionTitle = styled.h2`
  margin: 0 0 40px;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Tag = styled.li`
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-hover);
  font-family: var(--font-mono), monospace;
  font-size: 0.78rem;
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 10px;
  border: 1px solid
    ${({ $variant }) => ($variant === 'secondary' ? 'var(--border)' : 'var(--accent)')};
  background: ${({ $variant }) => ($variant === 'secondary' ? 'var(--surface)' : 'var(--accent)')};
  color: ${({ $variant }) => ($variant === 'secondary' ? 'var(--text)' : '#ffffff')};
  font-size: 0.95rem;
  font-weight: 600;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: ${({ $variant }) => ($variant === 'secondary' ? 'var(--bg)' : 'var(--accent-hover)')};
    border-color: ${({ $variant }) => ($variant === 'secondary' ? 'var(--text)' : 'var(--accent-hover)')};
  }
`;
