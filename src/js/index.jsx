import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
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
    this.onReset = this.onReset.bind(this);
  }
  onChange(event) {
    this.setState({
      carriers: this.state.carriers.filter(element =>
        element.carrier === event.target.value),
    });
  }
  onReset() {
    console.log('reset');
    // this.setState({ carriers: info.flights });
  }
  render() {
    return (
      <div className="container">
        <div>
          <Select
            data={info.flights}
            title="All Carrier"
            onChange={this.onChange}
            onReset={this.onReset}
          />
        </div>
        <Cards data={this.state.carriers} correctdate={correctDate} />
      </div>
    );
  }
}

// Select.propTypes = {
//   // data: PropTypes.array,
//   title: PropTypes.string,
//   onChange: PropTypes.func,
// };

ReactDOM.render(<App />, document.getElementById('app'));
