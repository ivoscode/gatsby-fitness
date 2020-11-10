import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Instagram from '../components/instagram';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Services from '../components/services';
import About from '../components/about';
import Hero from '../components/hero';
import { ContactForm } from '../components/contactForm';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <Hero />
      <section className='container'>
        <Services />
        <About />
        <Instagram />
        <Contact />
        <ContactForm />
      </section>

      <Footer />
    </Layout>
  );
};

export default IndexPage;
