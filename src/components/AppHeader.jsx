import React from 'react';
import Navigation from './Navigation.jsx';
import HeaderLinks from './HeaderLinks.jsx';

const AppHeader = ({ navScrollHandler }) => (
  <div id='AppHeader'>
    <div className='headerTitle'>Chandler Ocapan</div>
    <Navigation navScrollHandler={navScrollHandler} />
    <HeaderLinks />
  </div>
);

export default AppHeader;
