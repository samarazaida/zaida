import React from 'react';
import sys from 'system-components';

const Heading = sys(
  {
    is: 'h2',
    fontSize: 5,
    fontWeight: 'bold',
    lineHeight: 1.25,
    m: 0,
  }
);

Heading.displayName = 'Heading';

Heading.H1 = props => <Heading is="h1" fontSize={5} {...props} />;
Heading.H2 = props => <Heading is="h2" fontSize={4} {...props} />;
Heading.H3 = props => <Heading is="h3" fontSize={3} {...props} />;
Heading.H4 = props => <Heading is="h4" fontSize={2} {...props} />;
Heading.H5 = props => <Heading is="h5" fontSize={1} {...props} />;
Heading.H6 = props => <Heading is="h6" fontSize={0} {...props} />;

export default Heading;
