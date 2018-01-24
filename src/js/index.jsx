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
  onChange() {
    console.log('qwe');
    // this.setState({ carriers: this.state.carriers.filter.call(element => element.value === 'KLM') });
  }
  render() {
    return (
      <div className="container">
        <Select
          data={this.state.carriers}
          title="All Carrier"
          onChange={this.onChange}
          // ref={select => this.select = select}
        />
        <Cards data={info} correctdate={correctDate} />
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
