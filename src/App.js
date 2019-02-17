import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist'; 
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Productlist} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
        </Switch>
      </React.Fragment>
    )
  }
}
