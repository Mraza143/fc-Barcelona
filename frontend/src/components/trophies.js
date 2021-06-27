import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import {motion} from "framer-motion";
import './css/trophies.css';
import { useDispatch, useSelector } from 'react-redux';
import { listTrophies } from '../actions/trophyActions';
import Home from './pages/Home';
import { Link } from 'react-router-dom';
import {useInView} from 'react-intersection-observer';
import {useAnimation} from "framer-motion";
import "aos/dist/aos.css";
import Aos from 'aos';
function Trophies() {




  const boxVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const trophyList = useSelector(state=>state.trophyList);
  const {trophies , loading , error} = trophyList;
  const dispatch = useDispatch();
  useEffect(()=>{
   
    dispatch(listTrophies());
    Aos.init({duration : 1000});

    return ()=>{
      //
    };
  },[] )
  return <div  className="whole">      
      {trophies.map((product)=>(

        <div data-aos="flip-right"  className = "column col-lg-4  col-sm-4" >
        
          <Link className='cards__item__link' to={Home}>
          <Card  className="card">
          <CardImg className="cards__item__img"  top  src={product.src} alt="Card image cap" />
          <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardText>{product.punchline}</CardText>
        </CardBody>
         </Card>
         </Link>
        </div>
      ))}
    </div>
}

export default Trophies;

/*<div className='cards'>

          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', delay: 0.5 }}




      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {TrophyData.trophies.map((trophy)=>(
            <ul className='cards__items'>
            <CardItem
              src={trophy.src}
              text={trophy.punchline}
              label='Adventure'
              path='/services'
            />
             </ul>
          ))}
          
          
        </div>
      </div>
    </div>
  );


function Trophies() {
  return (
    <div className="trophies">
      <h1>Have a Look at our Trophies</h1>
      {TrophyData.trophies.map((trophy)=>(
        <Card className="card">
        <CardImg top className="card_img" src={trophy.src} alt="Card image cap" />
        <CardBody>
          <CardTitle className="title" tag="h5">{trophy.name}</CardTitle>
          <CardText>{trophy.punchline}</CardText>
        </CardBody>
      </Card>
      ))}
      
    </div>
  )
}

export default Trophies;*/
/*
<CardItem
              src='images/ucl.jpg'
              text='5 times uefa ucl Winners!'
              label='Luxury'
              path='/services'
            />
          </ul>
          <CardItem
              src='images/laliga.jpg'
              text='30 times laliga Winners!'
              label='Adrenaline'
              path='/sign-up'
            />
        <CardItem
              src='images/ucl.jpg'
              text='5 times uefa ucl Winners!'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/super.jpg'
              text='18 times spanish super cup Winners!'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/cwc.png'
              text='24 times cwc Winners!'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/cdr.jpg'
              text='30 times CDR Winners!'
              label='Adrenaline'
              path='/sign-up'
            />
          <ul className='cards__items'>
            <CardItem
              src='images/super.jpg'
              text='18 times spanish super cup Winners!'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/cwc.png'
              text='24 times cwc Winners!'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/cdr.jpg'
              text='30 times CDR Winners!'
              label='Adrenaline'
              path='/sign-up'
            />


                     /* <div className = "column col-lg-4   col-sm-4">
    <Card className="card">
      <CardImg  top width="100%" src="images/laliga.jpg" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Card Title</CardTitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
      </CardBody>
    </Card>
    </div>
    </div>
 */

