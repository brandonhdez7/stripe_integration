import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Loading from './components/Loading/Loading'
import CoffeeMap from './components/GoogleMaps'
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
            <Route export path="/CoffeeMap" component={CoffeeMap}></Route>
          </div>
        </div>
     </Router>
    );
  }
}

export default App;
