import React from 'react';
import '../App.css';
import { Button } from './Button';
import './css/HeroSection.css';

function HeroSection() {
  
  return (
    <div className='hero-container'>
      <img className="camp"  src="images/camp1.jpg" alt="haha"/>
      <h1>Welcome To Barcelona</h1>
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
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Buy Merchandise <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
