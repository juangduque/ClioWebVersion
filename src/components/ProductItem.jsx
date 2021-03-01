import React from 'react';

import '../styles/css/components/productItem.css';

const ProductItem = (props) => (
  <div className="productItem-container">
    <p>{props.name}</p>
  </div>
);

export default ProductItem;