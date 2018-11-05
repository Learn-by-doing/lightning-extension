import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navigation from '../common/Navigation';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired, // TODO: What types do we accept as props?
  };

  render () {
    const {
      children,
    } = this.props;

    return (
      <div>
        <h1>Extension layout</h1>
        <Navigation />
        <div>
          {children}
        </div>
      </div>
    );

  }
}

export default Layout;