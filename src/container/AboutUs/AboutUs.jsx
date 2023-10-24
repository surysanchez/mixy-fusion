import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.MF} alt="mf letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
      <h1 className="headtext__cormorant">About Us</h1>
      <img src={images.fork} style={{width: '130px' ,height: '90px', marginTop: '-30px', marginBottom: '-20px'}} alt="fork" className='fork__img'/>
      <p className='p__opensans'></p>
      <button type="button" className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
