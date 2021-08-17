import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

import AboutPage from '../pages/about';
import ProjectsPage from '../pages/projects';
import IntroPage from '../pages/intro';


export const siteTitle = 'Online porftolio';

// ({ children }) {
    export default function Layout(){
    return (
        
        <>
            <Header />
            {/* <div>{children}</div> */}
            <IntroPage />
            <ProjectsPage />
            <AboutPage />
            <Footer />
            
        </>
    )
  }