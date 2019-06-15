import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Loading from './components/Loading/Loading'
import GoogleMaps from './components/GoogleMaps/GoogleMaps'
import About from './components/About/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chemex from './components/Methods/Chemex';
import Methods from './components/Methods/Methods'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/Loading" component={Loading}></Route>
            <Route exact path="/" component={Home}></Route>
          <div className="container">
            <Route exact path="/Login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route export path="/GoogleMaps" component={GoogleMaps}></Route>
            <Route export path="/About" component={About}></Route>
            <Route export path="/Chemex" component={Chemex}></Route>
            <Route export path="/Methods" component={Methods}></Route>
          </div>
        </div>
     </Router>
    );
  }
}

export default App;
