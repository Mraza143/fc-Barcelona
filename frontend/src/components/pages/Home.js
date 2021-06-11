import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Trophies from '../trophies';
import Players from '../players';

function Home() {
  return (
    <>
      <HeroSection />
      <Trophies/>
      <Players/>
      <Footer />
    </>
  );
}

export default Home;
