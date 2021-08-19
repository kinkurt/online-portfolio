import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

import AboutPage from '../components/About';
import ProjectsPage from '../components/ProjectDoc';
import IntroPage from '../components/Intro';
import ContactPage from '../components/Contact';


export const siteTitle = 'Online porftolio';

// ({ children }) {
    export default function Layout({ children }){
    return (
        
        <>
            <Header />
            <div>{children}</div>
            
            <Footer />
            
        </>
    )
  }