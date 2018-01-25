import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import '../styles.scss';

import correctDate from './data/correctDate';
import info from './data/getData';
import Select from './components/Select.jsx';
import Cards from './components/Cards.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { carriers: info.flights };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    if (event.target.value === 'All Carrier') {
      this.setState({ carriers: info.flights });
    } else {
      const newState = info.flights.filter(element => (
        (element.carrier === event.target.value) ? element : null));
      this.setState({ carriers: newState });
    }
  }
  render() {


    const reducer = (check = [], action) => {
      console.log('check action', action);
      return check;
    };
    const store = createStore(reducer);
    store.subscribe(() => {
      console.log('check subscribe', store.getState());
    });
    store.dispatch({ type: 'check' });

    return (
      <div className="container">
        <div>
          <Select
            data={info.flights}
            title="All Carrier"
            onChange={this.onChange}
          />
        </div>
        <Cards data={this.state.carriers} correctdate={correctDate} />
      </div>
    );
  }
}

Select.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  onChange: PropTypes.func,
};

ReactDOM.render(<App />, document.getElementById('app'));
