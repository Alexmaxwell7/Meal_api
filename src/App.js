import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Home from './components/home';
import ItemDetails from './components/itemdetails';
import Shipping from './components/shipping';
import Orderpurchase from './components/order';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

function App() {
  let routes = useRoutes([
    { path:"/", element: <Home /> },
    { path:"/selecteditem/:idMeal", element: <ItemDetails /> },
    { path:"/shipping", element: <Shipping /> },
    { path:"/purchase", element: <Orderpurchase /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
  

export default AppWrapper;
