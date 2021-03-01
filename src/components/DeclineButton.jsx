import React from 'react';

import '../styles/css/components/declineButton.css';

const DeclineButton = (props) => (
  <button className="declineButton">{props.value}</button>
);

export default DeclineButton;