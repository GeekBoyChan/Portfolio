import React from 'react';
import pdf from '../data/ChandlerOcapanResume.pdf';

const HeaderLinks = () => {
  return (
    <div className='headerLinks'>
      <a
        href='https://www.linkedin.com/in/cocapan/'
        target='_blank'
        className='headerIcon'
      >
        <img src='images/linkedin.png'></img>
      </a>
      <a
        href='https://github.com/GeekBoyChan'
        target='_blank'
        className='headerIcon'
      >
        <img src='images/github.png'></img>
      </a>
      <a href={pdf} target='ChandlerOcapanResume' className='resume'>
        Resume
      </a>
    </div>
  );
};

export default HeaderLinks;
