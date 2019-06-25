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
import AeroPress from './components/Methods/AeroPress'
import V60 from './components/Methods/V60'
import FrenchPress from './components/Methods/FrenchPress'
import Turkish from './components/Methods/Turkish'
import Espresso from './components/Methods/Espresso'
import MokaPot from './components/Methods/MokaPot'
import ColdBrew from './components/Methods/ColdBrew'
import ChemexTimer from './components/Methods/ChemexTimer'

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
            <Route export path="/AeroPress" component={AeroPress}></Route>
            <Route export path="/V60" component={V60}></Route>
            <Route export path="/FrenchPress" component={FrenchPress}></Route>
            <Route export path="/Turkish" component={Turkish}></Route>
            <Route export path="/Espresso" component={Espresso}></Route>
            <Route export path="/MokaPot" component={MokaPot}></Route>
            <Route export path="/ColdBrew" component={ColdBrew}></Route>
            <Route export path="/ChemexTimer" component={ChemexTimer}></Route>
          </div>
        </div>
     </Router>
    );
  }
}

export default App;
