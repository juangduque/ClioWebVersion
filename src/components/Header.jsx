import React from 'react';
import ClioLogo from '../assets/icons/header-clioLogo.png';
import LateralMenuIcon from '../assets/icons/header-lateralMenu.png';

import '../styles/css/components/header.css';

const Header = () => (
  <header>
    <div className="logoContainer">
      <span><img src={ClioLogo} alt="Clio logo"/></span>
      <h2>Clio</h2>
    </div>
    <div className="lateralMenu">
      <img src={LateralMenuIcon} alt=""/>
    </div>
  </header>
);

export default Header;