import React from 'react';

import {images} from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{marginBottom: '1rem' }} >
    <p className='p__cormorant'>{title} </p>
    <img src={images.fork} style={{width: '130px' ,height: '90px', marginTop: '-30px', marginBottom: '-20px'}} alt="fork" className='fork__img'/>
    {/* <img src={images.spoon}  alt="spoon" className='spoon__img'/> */}
  </div>
);

export default SubHeading;
