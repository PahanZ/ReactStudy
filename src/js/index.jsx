import React from 'react';
import ReactDOM from 'react-dom';
import '../styles.scss';

const Hello = () => {
  const check = 'yes';
  return check;
};

ReactDOM.render(<Hello />, document.getElementById('app'));
