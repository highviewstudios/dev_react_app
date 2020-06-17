import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./product";
import ServerPath, { hostPath } from "./ServerPath";

function App() {

  const[products, setProducts] = useState([]);
  const[newProduct, setNewProduct] = useState({
    name: "",
    price: 0
  });

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

  function handleChange(event) {

    const {name, value} = event.target;

    setNewProduct((prevValue) => {
      return {...prevValue, [name]:value}
    });
  }

  function addProduct() {
    const {name, price } = newProduct;

    const url = hostPath + "/products/add?name=" + name + "&price=" + price;

    fetch(url)
    .then(getProducts)
    .then(setNewProduct({name: "", price: 0}))
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
      <div>
        <input name="name" value={newProduct.name} onChange={handleChange}/>
        <input name="price" value={newProduct.price} onChange={handleChange}/>
        <button onClick={addProduct}>Add</button>
      </div>
    </div>
  );
}

export default App;
