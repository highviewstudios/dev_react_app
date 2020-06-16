require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

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

app.get('/products', function(req, res) {
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

app.get('/ping', (req, res) => {
    return res.send('pong');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 8080, function (req, res) {
    console.log("Running on port 8080")
});

// to see development changes in the react app, run 'npm start'
// to be able to connect to the database, run 'nodemode server.js' too