import { render } from '@testing-library/react';
import React from 'react';
import SectionContainer from '../components/SectionContainer.jsx';
import AcceptButton from '../components/AcceptButton.jsx';
import DeclineButton from '../components/DeclineButton.jsx';
import GhostButton from '../components/GhostButton.jsx';

import '../styles/css/pages/payOrder.css';

class PayOrder extends React.Component{
  render() {
    return(
      <main>
        {/* view's title */}
        <div className="payOrderTitle">
          <span></span>
          <h1>Cobrar pedido</h1>
        </div>

        {/* highlights section */}
        <section className="orderHighlights">
          <div className="orderName">
            <h3>Nombre:</h3>
            <h4>Mesa 1</h4>
          </div>
          <div className="orderMode">
            <h3>Modalidad:</h3>
            <h4>En el lugar</h4>
          </div>
        </section>

        {/* Details of Products of the order */}
        <SectionContainer 
          title="Resumen de la orden" 
          verticalPadding="5px"
          horizontalPadding="3px"
        >
        <div className="resumeOrderTable">
          <span className="tableHeader">
            <strong>Cantidad</strong>
          </span>
          <span className="tableHeader">
            <strong>Producto</strong>
          </span>
          <span className="tableHeader">
            <strong>Valor</strong>
          </span>
          <span>2</span>
          <span>hamburguesa albina</span>
          <span>$24.000</span>
          <span>1</span>
          <span>Entrada ciudad latina</span>
          <span>$4.000</span>
          <span>1</span>
          <span>Jugo N. en agua</span>
          <span>$3.000</span>
          <span>1</span>
          <span>Jugo hit</span>
          <span>$2.500</span>    
          <span>1</span>
          <span>servicio a la mesa</span>
          <span>$3.000</span>      
        </div>

        </SectionContainer>

        {/* Payment area  */}
        <section className="paymentArea">
          <div className="chargeServiceMode">
            <h3>Cobrar servicio a la mesa</h3>
            <input type="radio" id="noOption" name="chargeService" value="No" defaultChecked/>
            <label htmlFor="noOption">No</label><br/>
            <input type="radio" id="yesOption" name="chargeService" value="Si" />
            <label htmlFor="yesOption">Si</label><br/>
          </div>
          <div className="totalPriceArea">
            <h3 className="description">Total:</h3>
            <h3 className="quantity">$36.000</h3>
          </div>

          {/* Payment methods selection */}
          <div className="paymentMethods">
            <h3>Métodos de pago</h3>
            <div className="checkboxContainer">
              <input type="checkbox" id="cash" name="chargeService" value="Efectivo" />
              <label htmlFor="cash">Efectivo</label>
            </div>
            <div className="checkboxContainer">
              <input type="checkbox" id="card" name="chargeService" value="Tarjeta" />
              <label htmlFor="card">Tarjeta</label>
            </div>
            <div className="checkboxContainer">
              <input type="checkbox" id="daviplata" name="chargeService" value="Daviplata" />
              <label htmlFor="daviplata">Daviplata</label>
            </div> 
            <div className="checkboxContainer">
              <input type="checkbox" id="nequi" name="chargeService" value="Nequi" />
              <label htmlFor="nequi">Nequi</label>
            </div>         
          </div>
        </section>

        {/* main button area options */}
        <section className="paymentConfirmationZone">
          <GhostButton value="Imprimir factura" to=""/>
          <GhostButton value="No cobrar" to=""/>
          <AcceptButton value="Cobrar" />
          <DeclineButton value="Cancelar" />
        </section>
      </main>
    );
  };  
};

export default PayOrder;