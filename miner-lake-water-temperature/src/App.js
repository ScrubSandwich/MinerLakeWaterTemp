import React from 'react';
import './App.css';
import axios from'axios';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import home from './pages/home';
import about from './pages/about';

axios.defaults.baseURL = 'https://us-central1-minerlakewatertemperature.cloudfunctions.net/api';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <div className="container">
          <Switch> 
            <Route exact path="/" component={home} />
            <Route exact path="/about" component={about} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
