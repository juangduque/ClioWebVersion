import React from 'react';
import SectionContainer from '../components/SectionContainer.jsx';
import GhostButton from '../components/GhostButton.jsx';

import '../styles/css/pages/operationsDBCostumer.css';

const ConsultDBCostumers = () => (
  <main>
    {/* View's Title */}
    <div className="costumerOperationsInDBTitle">
      <span></span>
      <h1>Clientes</h1>
    </div>
    <SectionContainer>
      <div className="optionsOperationsButtons">
        <GhostButton value="Consultar" to="/ConsultarBD/clientes/consultar" />
        <GhostButton value="Ingresar" to="/ConsultarBD/clientes/ingresar"/>
        <GhostButton value="Modificar"/>
      </div>
    </SectionContainer>

    {/* view's ilustration section */}
    <section className="operationsDBCostumers">
      <span ></span>
    </section>

  </main>
);

export default ConsultDBCostumers;