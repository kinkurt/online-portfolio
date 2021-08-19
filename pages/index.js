//components
import AboutPage from '../components/About';
import ProjectsPage from '../components/ProjectDoc';
import IntroPage from '../components/Intro';
import ContactPage from '../components/Contact';
import Head from 'next/head';

const HomePage = () => (
    <>
            <Head>
                <title>
                    Kurt Kin
                </title>
            </Head>
            <IntroPage />
            <ProjectsPage />
            <AboutPage />
            <ContactPage />
    </>
);

export default HomePage;