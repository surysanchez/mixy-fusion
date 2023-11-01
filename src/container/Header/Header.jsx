import React from 'react';
import {images} from '../../constants';

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
    <SubHeading title='Chase the new flavour' />
    <h1 className='app__header-h1'>Crafting Memorable Moments with Culinary Excellence</h1>
    <p className='p__opensans'style={{ margin: '2rem 0' }} >Savor the flavor: <br /> Delicious Bites, Delivered with Love!</p>
    <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
   <img src={images.homepic} alt="homepic" />
    </div>
  </div>
);

export default Header;
