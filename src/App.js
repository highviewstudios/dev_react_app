import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./product";

function App() {

  const[products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  },[]);

  function enterProducts(data) {
    setProducts((prevValue) => {
      return data;
    })
  }

  function getProducts() {
    fetch("http://localhost:8080/products")
    .then(response => response.json())
    .then(({ data }) => {
      enterProducts(data);
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="App">
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
