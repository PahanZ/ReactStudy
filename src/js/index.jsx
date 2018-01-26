import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { store, firstStoreUpload } from './data/getData';
import '../styles.scss';

import correctDate from './data/correctDate';
import Select from './components/Select.jsx';
import Cards from './components/Cards.jsx';

const onChange = (event) => {
  const filter = (carriers) => {
    if (event.target.value === 'All Carrier') {
      return firstStoreUpload;
    }
    const newState = carriers.filter(element => (
      (element.carrier === event.target.value) ? element : null));
    return newState;
  };
  store.dispatch({
    type: 'changeStore',
    change: filter(firstStoreUpload),
  });
};

const App = () => (
  <div className="container">
    <div>
      <Select
        data={firstStoreUpload}
        title="All Carrier"
        onChange={onChange}
      />
    </div>
    <Cards data={store.getState()} correctdate={correctDate} />
  </div>
);

store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});

ReactDOM.render(<App />, document.getElementById('app'));

// Select.propTypes = {
//   data: PropTypes.array,
//   title: PropTypes.string,
//   onChange: PropTypes.func,
// };
