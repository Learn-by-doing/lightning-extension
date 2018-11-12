import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import Routes from './routes';

import './index.css';

const Index = () => (
  <Router>
    <Routes />
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));