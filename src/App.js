import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pages/partials/app.css"

import Home from "./pages/home";
import Products from "./pages/items";
import SignIn from "./pages/signin";
import Register from "./pages/register";
import Auth from './pages/auth';
import TestArea from './pages/testArea';

//Administrator Items
import AdminAuth from "./pages/administrator/auth";
import AdminSignIn from "./pages/administrator/signin";
import AdminHome from "./pages/administrator/home";


import UserContextProvider from './context/userContext';
import AdminContextProvider from './context/adminContext';

function App() {

  return (
    <UserContextProvider>
    <Router>
    <Switch>
      <Route path="/" exact component={Auth} />
      <Route path="/Home" exact component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/signin" component={SignIn} />
      <Route path="/register" component={Register} />
      <Route path="/test" component={TestArea} />
      <AdminContextProvider>
      <Route path="/administrator" exact component={AdminAuth} />
      <Route path="/administrator/signin" component={AdminSignIn} />
      <Route path="/administrator/home" component={AdminHome} />
      </AdminContextProvider>
      </Switch>
    </Router>
    </UserContextProvider>
  );
}

export default App;
