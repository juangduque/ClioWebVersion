import React from 'react';
import SearchBar from '../components/SearchBar.jsx';

import '../styles/css/pages/dBCostumerConsult.css';

const DBCostumerConsult = () => (
  <main>

    {/* View's title */}
    <div className="consultConstumerinDBTitle">
      <span></span>
      <h1>Consultar cliente</h1>
    </div>

    {/* search section */}    
    <SearchBar />

    {/* view's ilustration section */}
    <section className="consultCostumerIllustration">
      <span ></span>
    </section>

  </main>
);

export default DBCostumerConsult;