import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Nearby from './nearby/Nearby';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/nearby' component={Nearby} />
        </Switch>
      </div>
    );
  }
}

export default App;
