import React from 'react';
import IntroductionIcon from './IntroductionIcon.js';

const Introduction = () => {
  return (
    <div id='Introduction'>
      <h1 className='greeting'>Welcome!</h1>
      <h3 className='introBody'>I'm Chandler Ocapan, a Software Engineer</h3>
      <IntroductionIcon />
    </div>
  );
};

export default Introduction;
