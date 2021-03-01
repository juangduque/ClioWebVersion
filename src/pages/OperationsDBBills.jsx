import React from 'react';
import SearchBar from '../components/SearchBar.jsx';

import '../styles/css/pages/operationsDBBills.css';

const OperationsDBBills = () => (
  <main>
    {/* View's Title */}
    <div className="operationsBillsTitle">
      <span></span>
      <h1>Facturas</h1>
    </div>
    
    <div className="infoButton">
      <span></span>
    </div>

    {/* seach area */}
    <SearchBar />

    {/* view's ilustration section */}
    <section className="operationsDBBills">
      <span ></span>
    </section>

  </main>
);

export default OperationsDBBills;