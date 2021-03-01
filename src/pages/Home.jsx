import React from 'react';


// COMPONENTS
import ButtonHome from '../components/ButtonHome.jsx';

// ICONS
import MakeOrderIcon from '../assets/icons/HomeMakeOrderIcon.png';
import ActiveOrdersIcon from '../assets/icons/HomeActiveOrders.png';
import DBOperationsIcon from '../assets/icons/HomeDBOperations.png';
import RecordIcon from '../assets/icons/HomeRecord.png';
import AdminIcon from '../assets/icons/HomeAdmin.png';

// STYLE
import '../styles/css/pages/home.css'

const Home = () => (
  <main>
    <ButtonHome icon={MakeOrderIcon} text="Hacer pedido" to="/hacer-pedido"/>
    <ButtonHome icon={ActiveOrdersIcon} text="Pedidos activos" to="/pedidos-activos"/>
    <ButtonHome icon={DBOperationsIcon} text="Operaciones en DB" to="/ConsultarBD"/>
    <ButtonHome icon={RecordIcon} text="Historial" to="/Historial"/>
    <ButtonHome icon={AdminIcon} text="Administrador" to="/"/>
  </main>
);

export default Home;