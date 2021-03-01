import React from 'react';
import { Link } from 'react-router-dom';


import '../styles/css/components/ghostButton.css';

const GhostButton = (props) => (
  <Link className="ghostButton" to={props.to}>{props.value}</Link>
);

export default GhostButton;