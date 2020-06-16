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
    fetch("https://react-development.high-view-studios.co.uk/products")
    .then(response => response.json())
    .then(({ data }) => {
      enterProducts(data);
      console.log(products);
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="App">
    {console.log(products)}
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
