import Header from './Header';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

export const siteTitle = 'Online porftolio';

export default function Layout({ children }) {
    return (
        <>
        <Header />
        <div>{children}</div>
        </>
    )
  }