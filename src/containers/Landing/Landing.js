import React from "react";
import Nav from '@Landing/Nav/Nav';
import Banner from "@Landing/Banner/Banner";
import Main from '@Landing/Main/Main';
import Section from '@Landing/Section/Section';
import Footer from '@Landing/Footer/Footer';

const Landing = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Main />
            <Section />
            <Footer />
        </div>
    );
};

export default Landing;