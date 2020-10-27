import React from 'react';
import {Button} from '@material-ui/core'
import '../styles/banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className = "banner__info">
          <h1>Have some fun, travel around!</h1>
          <h5>Plan a refreshing gateway and explore the unexplored.</h5>
          <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;