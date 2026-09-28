import Head from 'next/head';
import Layout from '../components/site/Layout';
import Hero from '../components/site/Hero';
import Projects from '../components/site/Projects';
import Experience from '../components/site/Experience';
import About from '../components/site/About';
import Contact from '../components/site/Contact';

const title = 'Kurt Kin | Head of Technology Support & Software Developer';
const description =
    'Kurt Kin is a software developer and Head of Technology Support at Connect iQ in Durban, South Africa.';

const HomePage = () => (
    <Layout>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://kurtkin.com" />
        </Head>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
    </Layout>
);

export default HomePage;
