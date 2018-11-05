import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { paths } from './config';

import Homepage from './components/screens/Homepage';
import FundWallet from './components/screens/FundWallet';
import CurrentBalance from './components/screens/CurrentBalance';
import PaymentRequested from './components/screens/PaymentRequested';

export default () => (
  <Switch>
    <Route exact path={paths.homepage} component={Homepage} />
    <Route exact path={paths.fundWallet} component={FundWallet} />
    <Route exact path={paths.currentBalance} component={CurrentBalance} />
    <Route exact path={paths.paymentRequested} component={PaymentRequested} />
  </Switch>
);