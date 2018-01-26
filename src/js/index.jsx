import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { info, store } from './data/getData';
import '../styles.scss';

import correctDate from './data/correctDate';
import Select from './components/Select.jsx';
import Cards from './components/Cards.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    const filter = (carriers) => {
      if (event.target.value === 'All Carrier') {
        return info;
      }
      const newState = carriers.filter(element => (
        (element.carrier === event.target.value) ? element : null));
      return newState;
    };
    store.dispatch({
      type: 'changeStore',
      change: filter(info),
    });
  }
  render() {
    return (
      <div className="container">
        <div>
          <Select
            data={info}
            title="All Carrier"
            onChange={this.onChange}
          />
        </div>
        <Cards data={store.getState()} correctdate={correctDate} />
      </div>
    );
  }
}

// Select.propTypes = {
//   data: PropTypes.array,
//   title: PropTypes.string,
//   onChange: PropTypes.func,
// };

store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});

ReactDOM.render(<App />, document.getElementById('app'));
