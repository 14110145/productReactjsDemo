import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TopMenu from "./components/TopMenu.js";
import Products from "./pages/Products.js";

import { CartProvider } from "./contexts/cart.js";

const Index = () => <h2>Home</h2>;

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />

          <Route path="/" exact component={Index} />
          <Route path="/products" exact component={Products} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
