import React, { Component } from 'react';
import { node } from 'prop-types';
import { IntlProvider } from 'react-intl';

import 'react-intl/locale-data/en';

const Wrapper = ({ children }) => (
  <IntlProvider locale="en">
    {children}
  </IntlProvider>
);

Wrapper.propTypes = {
  children: node.isRequired,
};

export default Wrapper;
