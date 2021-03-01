import React from 'react';

import '../styles/css/components/addProductResumeCard.css';

const AddProductResumeCard = () => (
  <div className="resumeCard-container">

    {/* Header of the card */}
    <div className="resumeCard-header">
      <p>Hamburguesa Albina</p>
      <span className="resumeCard-header_comboButton"></span>
      <span className="resumeCard-header_deleteButton"></span>
    </div>

    {/* Options section */}
    <div className="options-container">

      {/* Quantity options */}
      <div className="options-quatityContainer">
        <span className="minusButton"></span>
        <p>1</p>
        <span className="plusButton"></span>
        
      </div>

      {/* Specifications options */}
      <div className="options-specificationsContainer">
          <span className="options-specifications_Special"></span>
          <span className="options-specifications_Additions"></span>
          <span className="options-specifications_Restrictions"></span>
          <span className="options-specifications_Comments"></span>
        </div>

    </div>
  </div>  
);

export default AddProductResumeCard;