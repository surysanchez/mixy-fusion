import React from 'react';
import {GiHamburguerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';


import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.mixyfusionlogo} alt="app logo" />
    </div>
  </nav>
);

export default Navbar;
