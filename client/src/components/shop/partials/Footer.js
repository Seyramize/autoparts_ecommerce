import React, { Fragment } from 'react';
import moment from 'moment';

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: '#5B5B5C', color: '#87898A' }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        Developed by SarxtTech © Copyright {moment().format('YYYY')}
      </footer>
    </Fragment>
  );
};

export default Footer;
