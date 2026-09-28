// The original (Version 1) design, kept available at /v1
import Head from 'next/head';
import Layout from '../components/v1/layout';
import IntroPage from '../components/v1/Intro';
import ProjectsPage from '../components/v1/ProjectDoc';
import AboutPage from '../components/v1/About';
import ContactPage from '../components/v1/Contact';

const VersionOne = () => (
    <Layout>
        <Head>
            <title>Kurt Kin (Version 1)</title>
            <meta name="robots" content="noindex" />
        </Head>
        <IntroPage />
        <ProjectsPage />
        <AboutPage />
        <ContactPage />
    </Layout>
);

export default VersionOne;
