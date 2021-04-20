import React, { useContext, useState } from "react";
import Nav from '@Landing/Nav/Nav';
import Banner from "@Landing/Banner/Banner";
import Main from '@Landing/Main/Main';
import Section from '@Landing/Section/Section';
import Footer from '@Landing/Footer/Footer';
import FooterCopy from '@Landing/Footer-Copy/FooterCopy';

const Landing = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Main />
            <Section />
            <Footer />
            <FooterCopy />
        </div>
    );
};

export default Landing;