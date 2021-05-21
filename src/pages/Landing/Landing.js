import React from 'react';
import Cookie from '@Pages/Landing/Cookie-Consent/Cookie';
import Nav from './Nav/Nav';
import Banner from './Banner/Banner';
import Main from './Main/Main';
import Section from './Section/Section';
import Footer from './Footer/Footer';
import FooterCopy from './Footer-Copy/FooterCopy';

const Landing = () => (
  <div>
    <Nav />
    <Banner />
    <Main />
    <Section />
    <Footer />
    <FooterCopy />
    <Cookie />
  </div>
);

export default Landing;
