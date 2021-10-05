/* eslint-disable jsx-quotes */
import React from 'react';
import Navigation from './Navigation.jsx';
import pdf from '../data/ChandlerOcapanResume.pdf';

const AppHeader = ({ navScrollHandler }) => (
  <div id='AppHeader'>
    <div>Chandler Ocapan</div>
    <Navigation navScrollHandler={navScrollHandler} />
    <a href='https://www.linkedin.com/in/cocapan/' target='_blank'>
      <img src='images/linkedin.png'></img>
    </a>
    <a href='https://github.com/GeekBoyChan' target='_blank'>
      <img src='images/github.png'></img>
    </a>
    <a href={pdf} target='ChandlerOcapanResume'>
      Resume
    </a>
  </div>
);

export default AppHeader;
