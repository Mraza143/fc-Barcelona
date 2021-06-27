import React from 'react';
import '../App.css';
import { Button } from './Button';
import './css/HeroSection.css';
import {motion} from "framer-motion"

function HeroSection() {
  
  return (
    <motion.div className='hero-container'
    initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', delay: 0.5 }}>
      <img className="camp"  src="images/camp1.jpg" alt="haha"/>
      <motion.h1
       whileHover={{ scale: 1.1, originX: 0, color: 'yellow' }}
       transition={{ type: 'spring', stiffness: 100 }}
      >Welcome To Barcelona</motion.h1>
      <p>The Best Football Club in the world</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET Your Tickets
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Buy Merchandise <i className='far fa-play-circle' />
        </Button>
      </div>
    </motion.div>
  );
}

export default HeroSection;
