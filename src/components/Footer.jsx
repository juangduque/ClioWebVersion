import React from 'react';

import toHomeIcon from '../assets/icons/footerToHome.png';
import settingsIcon from '../assets/icons/footerSettings.png';


import '../styles/css/components/footer.css';

const Footer = () => (
  <footer>
    <button><img src={toHomeIcon} alt=""/></button>
    <button><img src={settingsIcon} alt=""/></button>
  </footer>
);

export default Footer;