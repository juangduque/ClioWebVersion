import React from 'react';
import ProductCategory from '../components/ProductCategory.jsx';
import SectionContainer from '../components/SectionContainer.jsx';
import AcceptButton from '../components/AcceptButton.jsx';
import DeclineButton from '../components/DeclineButton.jsx';
import AddProductResumeCard from '../components/AddProductResumeCard.jsx';


import '../styles/css/pages/addProducts.css';

const AddProducts = () => (
  <main>
    <div className="AddProductsTitle">
      <span></span>
      <h1>Agregar productos</h1>
    </div>
    <section className="productCategoriesContainer">
      {/* <ProductCategory categoryName="Acompañamientos"/>
      <ProductCategory categoryName="Arroces"/>
      <ProductCategory categoryName="Bebidas"/> */}
      <ProductCategory categoryName="Hamburguesas" ratation="90deg"/>

      {/* <ProductCategory categoryName="Mazorcadas"/>
      <ProductCategory categoryName="Perros"/>
      <ProductCategory categoryName="Pizzas"/>
      <ProductCategory categoryName="Postres"/>
      <ProductCategory categoryName="Salchipapas"/>
      <ProductCategory categoryName="Sánduches"/> */}
    </section>
    {/* Section order resume */}
    <section>
      <SectionContainer 
        title="Resumen" 
        verticalPadding="5px"
        horizontalPadding="3px"
      >
        <AddProductResumeCard/>
      </SectionContainer>
    </section>
    {/* Buttons of confirmation */}
    <section className="confirmationZone">
      <AcceptButton value="Agregar productos al pedido" buttonWidth="250px"/>
      <DeclineButton value="Cancelar" />
    </section>
  </main>
);

export default AddProducts;