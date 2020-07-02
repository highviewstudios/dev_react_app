require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const cookieSession = require('cookie-session');
const cors = require('cors');

const initialisePassport = require('./passport/passport-config');
initialisePassport(passport);

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(cookieSession({
    name: 'session',
    keys: ["key1, key2"]
}));
app.use(passport.initialize());
app.use(passport.session());

//MAIN ROUTE
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//ROUTE FILES
const userLogin = require('./routes/userLogin');
const products = require('./routes/products');
const { Redirect } = require('react-router-dom');
app.use(userLogin);
app.use(products);


//TESTING ROUTES
app.get('/ping', (req, res) => {
    return res.send('pong');
});

app.post('/form', (req, res) => {
    console.log('hit');
    const name = req.body.name;
    console.log(name);
})


app.listen(process.env.PORT || 8080, function (req, res) {
    console.log("Running on port 8080")
});

// to see development changes in the react app, run 'npm start'
// to be able to connect to the database, run 'nodemode server.js' too