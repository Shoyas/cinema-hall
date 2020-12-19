import React from 'react';
import Header from './Header/Header';
import MainBody from './MainBody/MainBody';
import Navigation from './Navigation/Navigation';

const Home = () => {
    return (
        <section>
            <Navigation></Navigation>
            <Header></Header>
            <MainBody></MainBody>
        </section>
    );
};

export default Home;