import React from 'react';
import Card from './Card';
import '../styles/home.css';
import Banner from './Banner';
import nn from '../assets/nn.jpg'
import rt from '../assets/rooftop.jpg'
import an from '../assets/another.jpg'
import th from '../assets/th.jpg'
import gh from '../assets/gh.jpg'
import co from '../assets/co.jpg'
import ta from '../assets/tan.jpg'
import cab from '../assets/cab.jpg'

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src={nn}
          title="Nature's Nest Premium"
          description="Stay close to nature and rejuvenate"
        />
         <Card
          src={rt}
          title="Rooftop Studio"
          description="Get the best of the stary nights"
        /> 
        <Card
        src={an}
        title="Comfy Get Away"
        description="Stay a fully furnished feel at home studio"
      />
      <Card
        src={th}
        title="Tree House"
        description="Get the best of nature"
      />
      </div>

      <div className="home__section">
        <Card
          src={gh}
          title="Guest House with Pool"
          description="Enjoy the stay with a private pool"
        />
         <Card
          src={co}
          title="Jaz Cottage"
          description="Rejoice your stay in a fully equiped cottage"
        /> 
        <Card
        src={ta}
        title="Tranquility Stay"
        description="Feel the positive vibes and feel refreshed"
      />
      <Card
        src={cab}
        title="Cabin Stay"
        description="Get the of the mountain viewed stay"
      />
      </div>
    </div>
  );
}

export default Home;
