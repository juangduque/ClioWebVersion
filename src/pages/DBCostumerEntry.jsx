import React from 'react';

import InputField from '../components/InputField.jsx';
import AcceptButton from '../components/AcceptButton.jsx';
import DeclineButton from '../components/DeclineButton.jsx';

import '../styles/css/pages/dBCostumerEntry.css';

const DBCostumerEntry = () => (
  <main>

    {/* View's title */}
    <div className="consultConstumerinDBTitle">
      <span></span>
      <h1>Ingresar cliente</h1>
    </div>
    
    {/* form constumer data */}
    <section className="form">
      <InputField value="Nombre"/>
      <InputField value="Dirección"/>
      <InputField value="Teléfono"/>
      <InputField value="Barrio"/>
      <InputField value="Piso"/>
      <InputField value="Cobro por domicilio"/>
      <InputField value="Comentarios"/>
    </section>

    {/* confirmation area */}
    <div className="confirmationArea">
      <AcceptButton value="Guardar"/>
      <DeclineButton value="Cancelar"/>
    </div>
  </main>
);

export default DBCostumerEntry;