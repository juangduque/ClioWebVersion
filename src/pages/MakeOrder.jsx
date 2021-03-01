import React from 'react';
import SectionContainer from '../components/SectionContainer.jsx';
import GhostButton from '../components/GhostButton.jsx';
import AcceptButton from '../components/AcceptButton.jsx';
import DeclineButton from '../components/DeclineButton.jsx';


import '../styles/css/pages/makeOrder.css';

const MakeOrder = () => (
  <main>

    {/* View's Title */}
    <div className="MakeOrderTitle">
      <span></span>
      <h1>Hacer pedido</h1>
    </div>

    {/* Section consumption Mode */}
    <SectionContainer title="Modalidad de consumo">
      <div className="consumptionSelection">
        <input type="radio" id="InPlace" name="consumptionMode" value="En el lugar" defaultChecked/>
        <label htmlFor="InPlace">En el lugar</label><br/>
        <input type="radio" id="takeHome" name="consumptionMode" value="Para llevar" />
        <label htmlFor="takeHome">Para llevar</label><br/>
        <input type="radio" id="Delivery" name="consumptionMode" value="Domicilio" />
        <label htmlFor="Delivery">Domicilio</label><br/>    
      </div>
      <div className="buttonsOptionZone">
        <select name="select">
          <option value="Mesa 1">Mesa 1</option>
          <option value="Mesa 2">Mesa 2</option>
          <option value="Mesa 3">Mesa 3</option>
        </select>
        <GhostButton value="Poner otro nombre" to=""/>
        <GhostButton value="Agregar productos" to="/agregar-productos"/>
      </div>
    </SectionContainer>

    {/* Section order resume */}
    <SectionContainer 
      title="Resumen del pedido" 
      verticalPadding="10px"
      horizontalPadding="10px">
      <p>Aún no se ha agregado nada</p>
    </SectionContainer>

    {/* Buttons of confirmation */}
    <section className="confirmationZone">
      <AcceptButton value="Marchar pedido" />
      <DeclineButton value="Cancelar" />
    </section>     
  </main>
);

export default MakeOrder;