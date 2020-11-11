import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Instagram from '../components/instagram';
import Footer from '../components/footer';
import Services from '../components/services';
import About from '../components/about';
import Hero from '../components/hero';
import Contacts from '../components/contacts';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />

      <section className='container'>
        <Hero />
        <Services />
        <About />
        <Instagram />
        <Contacts />
      </section>

      <Footer />
    </Layout>
  );
};

export default IndexPage;
