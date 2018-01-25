import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
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
      const newState = [];
      info.flights.forEach((element) => {
        if (element.carrier === event.target.value) {
          newState.push(element);
          this.setState({ carriers: newState });
        }
      });
    }
  }
  render() {
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
