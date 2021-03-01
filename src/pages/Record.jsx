import React from 'react';
import AcceptButton from '../components/AcceptButton.jsx';

import '../styles/css/pages/record.css';

const Record = () => (
  <main>
    {/* View's title */}
    <div className="recordTitle">
      <span></span>
      <h1>Historial</h1>
    </div>

    {/* date entry section*/}
    <section className="datePickerRecord">
      <input type="date" value="" ></input>
      <AcceptButton value="Buscar" />
    </section>

    {/* view's ilustration section */}
    <section className="operationsDBCostumers">
      <span ></span>
    </section>
  </main>
);

export default Record;