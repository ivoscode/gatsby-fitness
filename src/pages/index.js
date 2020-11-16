import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Footer from '../components/footer';
import Services from '../components/services';
import About from '../components/about';
import Hero from '../components/hero';
import Contacts from '../components/contacts';
import TwoOptions from '../components/twoOptions';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />

      <section className='container'>
        <Hero />
        <TwoOptions />
        <Services />
        <About />

        <Contacts />
      </section>

      <Footer />
    </Layout>
  );
};

export default IndexPage;
