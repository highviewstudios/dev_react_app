require('dotenv').config();
const express = require('express');
const mysql = require("mysql");

const router = express.Router();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

//QUERIES
const SELECT_ALL_PRODUCTS_QUERY = "SELECT * FROM products";

router.get('/products', function(req, res) {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err);
        } else {
            return res.json({
                data: results
            });
        }
    });
});

router.get('/products/add', function(req, res) {
    const {name, price} = req.query;
    const INSERT_PRODUCTS_QUERY ="INSERT INTO products (name, price) VALUES('" + name + "'," + price + ")";

    connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err);
        } else {
            return res.send("Successfully added product");
        }
    });
});

module.exports = router;