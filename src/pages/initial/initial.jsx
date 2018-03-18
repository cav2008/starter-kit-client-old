import React from 'react';
import PropTypes from 'prop-types';

// Components

import './initial.scss';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.bar);
    console.log(this.props.setBar);
  }

  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

Chat.propTypes = {
  bar: PropTypes.string,
  setBar: PropTypes.func,
};

Chat.defaultProps = {
  bar: '',
  setBar: null,
};
