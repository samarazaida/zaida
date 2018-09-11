import React from 'react';
import sys from 'system-components';

const Footer = sys(
  {
    is: 'h2',
    fontSize: 5,
    fontWeight: 'bold',
    lineHeight: 1.25,
    m: 0,
  }
);

Footer.displayName = 'Footer';

Footer.H1 = props => <Footer is="h1" fontSize={5} {...props} />;
Footer.H2 = props => <Footer is="h2" fontSize={4} {...props} />;
Footer.H3 = props => <Footer is="h3" fontSize={3} {...props} />;
Footer.H4 = props => <Footer is="h4" fontSize={2} {...props} />;
Footer.H5 = props => <Footer is="h5" fontSize={1} {...props} />;
Footer.H6 = props => <Footer is="h6" fontSize={0} {...props} />;

export default Footer;
