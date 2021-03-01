import  React from 'react';


import '../styles/css/components/inputField.css';

const inputField = ( props ) => (
  <div className="inputField">
    <input type="text" name={ props.value } autoComplete="off" required/>
    <label htmlFor={ props.value } className="label-name" >
      <span className="content-name" >{ props.value }</span>
    </label>
  </div> 
);

export default inputField;