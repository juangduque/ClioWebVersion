import React from 'react';

import '../styles/css/components/acceptButton.css';

const AcceptButton = (props) => (
  <button className="acceptButton" style={{width: `${props.buttonWidth}`}}>{props.value}</button>
);

export default AcceptButton;