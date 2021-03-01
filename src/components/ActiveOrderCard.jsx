import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/components/activeOrderCard.css';

const ActiveOrderCard = () => (
 <div className="cardContainer">
    <div className="orderHighlights-up">
      <h3>Nombre</h3>
      <h3>Modalidad</h3>
      <h3>Tiempo</h3>
      <h4>Carlos</h4>
      <h4>Para llevar</h4>
      <h4>01:02:30 h</h4>
    </div>
    <div className="orderHighlights-down">
      <div className="details">
        <span className="viewDetails"></span>
        <span className="editOrder"></span>
      </div>
      <div className="totalPrice">$8.000</div>
      <Link className="payment" to="/Cobrar-pedido">$</Link>
    </div>
 </div>
);

export default ActiveOrderCard;