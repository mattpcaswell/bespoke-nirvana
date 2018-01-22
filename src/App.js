import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Nearby from './nearby/Nearby';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    // page data is assigned to the global window.data from the server
    this.setState({
      pages: window.data
    });
  }

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
