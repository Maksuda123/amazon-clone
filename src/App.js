import Header from './Header'
import './App.css';
import React from "react";
import Home from './Home'
import Checkout from './Checkout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
    <Switch>
      <Route path="/checkout">
        <Header/>
        <Checkout/>
        <h1>CheckOut</h1>
      </Route>
      <Route path="/login">
        <h1>Login page</h1>
      </Route>
      <Route path="/">
        <Header/>
        <Home/>
      </Route>
    </Switch>
    </div>
    </Router>
  
  );
}

export default App;
