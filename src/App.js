import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Routes from './components/routes';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    if (window.location.href.indexOf('localhost') > -1) {
      this.routerBasename = '/react-crud';
    }
    if (window.location.href.indexOf('localhost:3000') > -1) {
      this.routerBasename = '';
    }
    if (window.location.href.indexOf('localhost') === -1) {
      this.routerBasename = 'web/react-crud';
    }
  }
  render() {
    return (
      <Router basename={this.routerBasename}>
        <div className="App">
          <Header />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
