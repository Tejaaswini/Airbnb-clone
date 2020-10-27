import React from 'react';
import '../styles/searchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';
import nn from '../assets/nn.jpg'
import rt from '../assets/rooftop.jpg'
import an from '../assets/another.jpg'
import th from '../assets/th.jpg'
import gh from '../assets/gh.jpg'
import co from '../assets/co.jpg'
import ta from '../assets/tan.jpg'
import cab from '../assets/cab.jpg'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 27 Oct to 31 Oct · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img={nn}
        location="Private House"
        title="Nature's Nest Premium"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="₹999 / night"
        total="₹9000 total"
      />

      <SearchResult
        img={rt}
        location="Rooftop Studio"
        title="Independant luxury studio apartment"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
        star={4.3}
        price="₹3000 / night"
        total="₹9000 total"
      />

      <SearchResult
        img={an}
        location="Private House"
        title="Comfy Get Away"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="₹3500 / night"
        total="₹9000 total"
      />
      <SearchResult
        img={th}
        location="Private House"
        title="Tree House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="₹5500 / night"
        total="₹9000 total"
      />
      <SearchResult
        img={gh}
        location="Private House"
        title="Guest House with Pool"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="₹1000 / night"
        total="₹9000 total"
      />
      <SearchResult
        img={co}
        location="Private House"
        title="Jaz Cottage"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
        star={4.23}
        price="₹6500 / night"
        total="₹9000 total"
      />
      <SearchResult
        img={ta}
        location="Private House"
        title="Tranquility Stay"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="₹7000 / night"
        total="₹9000 total"
      />
      <SearchResult
        img={cab}
        location="Private House"
        title="Cabin Stay"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="₹8500 / night"
        total="₹9000 total"
      />
    </div>
  );
}

export default SearchPage;
