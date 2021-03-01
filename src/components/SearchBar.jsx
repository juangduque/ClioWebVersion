import React from 'react';
import AcceptButton from '../components/AcceptButton.jsx';

import '../styles/css/components/searchBar.css';

const SearchBar = () => (
  <section className="searchArea">
    <input type="text" placeholder="Nombre, teléfono, etc..."/>
    <AcceptButton value="Buscar"/>
  </section>
);

export default SearchBar;