import React from 'react';
import NavBar from './NavBar';
import HomeBackground from './HomeBackground';
import Footer from './Footer';
import Projects from './Projects';

function Home() {
  return (
    <div>
        <NavBar/>
        <HomeBackground/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Home