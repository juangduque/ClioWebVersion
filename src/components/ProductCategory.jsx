import React from 'react';
import ProductItem from '../components/ProductItem.jsx';
import SectionContainer from '../components/SectionContainer.jsx';



import '../styles/css/components/productCategory.css';

const ProductCategory = (props) => (
  <div className="sectionCategoryContainer">
    <div className="categoryTitle">
      <h2>{props.categoryName}</h2>
      <span style={{transform: `rotate(${props.ratation})`}}></span>
    </div>
      <SectionContainer 
        title="" 
        verticalPadding="10px"
        horizontalPadding="10px"
      >
      <div className="productsContainer">
        <ProductItem name="Albina"/>
        <ProductItem name="Berraca"/>
        <ProductItem name="Clásica"/>
        <ProductItem name="Crocante"/>
        <ProductItem name="Latina"/>
      </div>
    </SectionContainer>
  </div>
);

export default ProductCategory;