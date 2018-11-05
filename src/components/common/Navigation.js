import React from 'react';
import { Link } from 'react-router-dom';

import { paths } from '../../config';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to={paths.homepage}>Homepage</Link></li>
      <li><Link to={paths.currentBalance}>Current balance</Link></li>
      <li><Link to={paths.fundWallet}>Fund wallet</Link></li>
      <li><Link to={paths.paymentRequested}>Payment requested</Link></li>
    </ul>
  </nav>
);

export default Navigation;