import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HeroBanner from '../HeroBanner/HeroBanner';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className='max-w-[1280px] mx-auto' >
            <HeroBanner/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;