import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./product";
import ServerPath, { hostPath } from "./ServerPath";

function App() {

  const[products, setProducts] = useState([]);

  useEffect(() => {
    ServerPath();
    getProducts();
  },[]);

  function enterProducts(data) {
    setProducts((prevValue) => {
      return data;
    })
  }

  function getProducts() {
    fetch(hostPath + "/products")
    .then(response => response.json())
    .then(({ data }) => {
      enterProducts(data);
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="App">
        {console.log(hostPath)}
      <h1>hello!</h1>
      {products.map((product) => {
        return (
          <Product key={product.id} name={product.name} />
        )
      })}
    </div>
  );
}

export default App;
