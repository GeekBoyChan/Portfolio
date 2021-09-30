/* eslint-disable jsx-quotes */
import React from 'react';
import pdf from '../data/ChandlerOcapanResume.pdf';

const AppHeader = () => (
  <div id='AppHeader'>
    <div>Chandler Ocapan</div>
    <div>Social Media goes here</div>
    <a href={pdf} target='ChandlerOcapanResume'>
      Resume
    </a>
  </div>
);

export default AppHeader;
