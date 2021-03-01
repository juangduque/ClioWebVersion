import React from 'react';
import SectionContainer from '../components/SectionContainer.jsx';
import ActiveOrderCard from '../components/ActiveOrderCard.jsx';

import '../styles/css/pages/activeOrders.css';
import allIcon from '../assets/icons/activeOrdersAll.png';
import inThePlaceIcon from '../assets/icons/activeOrders-InThePlace.png';
import toCarryIcon from '../assets/icons/activeOrdersToCarry.png';
import deliveryIcon from '../assets/icons/activeOrdersDelivey.png';


const ActiveOrders = () =>(
  <main>

    {/* View's title */}
    <div className="ActiveOrdersTitle">
      <span></span>
      <h1>Pedidos activos</h1>
    </div>

    {/* Displaying Active orders section */}
    <section className="diplayActiveOrders">

      {/* Button Group of mode consumption electors section */}
      <div className="displayActiveOrders-modeSelector">
        <span className="displayActiveOrders-modeSelector_allOrders">
          <img src={allIcon} alt="Modo de consumo: Todos las ordenes"/>
        </span>
        <span className="displayActiveOrders-modeSelector_inPlace">
          <img src={inThePlaceIcon} alt=""/>
        </span>
        <span className="displayActiveOrders-modeSelector_toCarry">
          <img src={toCarryIcon} alt=""/>
        </span>
        <span className="displayActiveOrders-modeSelector_delivery">
          <img src={deliveryIcon} alt=""/>
        </span>
      </div>

        {/* Container for display orders */}
        <SectionContainer 
          title=" " 
          verticalPadding="4px"
          horizontalPadding="4px">
          <ActiveOrderCard />
        </SectionContainer>        
    </section>
    {/* Total active orders indicator */}
    <section className="indicatorTotalActiveOrders">
      <p className="description">Total de ordenes activas: </p>
      <p className="quantity">3</p>
    </section>
  </main>
);

export default ActiveOrders;