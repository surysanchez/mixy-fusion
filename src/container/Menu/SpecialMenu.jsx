import React from 'react';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';
import { images, data } from '../../constants';
const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu' >
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits your Palatte"  />
     <h1 className='headtext__cormorant'>Our Menu</h1>
    </div>
  </div>
);

export default SpecialMenu;
