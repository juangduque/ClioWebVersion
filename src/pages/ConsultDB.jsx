import React from 'react';
import SectionContainer from '../components/SectionContainer.jsx';
import GhostButton from '../components/GhostButton.jsx';


import '../styles/css/pages/consultDB.css';

const ConsultDB = () => (
  <main>

    {/* View's Title */}
    <div className="consultDBTitle">
      <span></span>
      <h1>Consultar la BD</h1>
    </div>

    {/* button options sectionJ */}
    <SectionContainer >
      <div className="buttonsContainer">
        <GhostButton value="Clientes" to="/ConsultarBD/clientes" />
        <GhostButton value="Facturas" to="/ConsultarBD/facturas" />
      </div>
    </SectionContainer>

    {/* view's ilustration section */}
    <section className="consultDBIllustration">
      <span ></span>
    </section>
  </main>
);

export default ConsultDB;