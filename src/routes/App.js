import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import MakeOrder from '../pages/MakeOrder.jsx';
import AddProducts from '../pages/AddProducts.jsx';
import ActiveOrders from '../pages/ActiveOrders.jsx';
import PayOrder from '../pages/PayOrder.jsx';
import ConsultDB from '../pages/ConsultDB';
import OperationsDBCostumers from '../pages/OperationsDBCostumers.jsx';
import OperationsDBBills from '../pages/OperationsDBBills.jsx';
import DBCostumerConsult from '../pages/DBCostumerConsult.jsx';
import DBCostumerEntry from '../pages/DBCostumerEntry.jsx';
import Record from '../pages/Record.jsx';

import Layout from '../components/Layout.jsx';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hacer-pedido" component={MakeOrder} />
        <Route exact path="/agregar-productos" component={AddProducts} />
        <Route exact path="/pedidos-activos" component={ActiveOrders} />
        <Route exact path="/Cobrar-pedido" component={PayOrder} />
        <Route exact path="/ConsultarBD" component={ConsultDB} />
        <Route exact path="/ConsultarBD/clientes" component={OperationsDBCostumers} />
        <Route exact path="/ConsultarBD/facturas" component={OperationsDBBills} />
        <Route exact path="/ConsultarBD/clientes/consultar" component={DBCostumerConsult} />
        <Route exact path="/ConsultarBD/clientes/ingresar" component={DBCostumerEntry} />
        <Route exact path="/Historial" component={Record} /> 
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
