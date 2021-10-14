/* eslint-disable jsx-quotes */
import React from 'react';
import Navigation from './Navigation.jsx';
import pdf from '../data/ChandlerOcapanResume.pdf';

const AppHeader = ({ navScrollHandler }) => (
  <div id='AppHeader'>
    <div className='headerTitle'>Chandler Ocapan</div>
    <Navigation navScrollHandler={navScrollHandler} />
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
      <a href={pdf} target='ChandlerOcapanResume' className='headerIcon'>
        Resume
      </a>
    </div>
  </div>
);

export default AppHeader;
