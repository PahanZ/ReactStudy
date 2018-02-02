import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../styles.scss';

import correctDate from '../data/correctDate';
import Select from './Select';
import Cards from './Cards';
import { changeCompany, getFlights } from '../redux/actions';

class App extends React.Component {
  componentDidMount() {
    setTimeout(() => { // emulation response delay
      this.props.getFlights();
    }, 1500);
  }
  render() {
    return (
      <div className="container">
        <div className="select">
          <Select
            data={this.props.carriers}
            title="All Carrier"
            option={this.props.option}
            onChange={this.props.changeCompany}
          />
        </div>
        <div className="cards" >
          <Cards data={this.props.flights} correctdate={correctDate} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flights: state.flights.filter((element) => {
    if (state.filterOption === '') {
      return state.flights;
    }
    return element.carrier === state.filterOption;
  }),
  carriers: new Set(state.flights.map(item => (item.carrier))),
  option: state.filterOption,
});

const mapDispatchToProps = {
  getFlights,
  changeCompany,
};

App.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.object).isRequired,
  option: PropTypes.string.isRequired,
  changeCompany: PropTypes.func.isRequired,
  getFlights: PropTypes.func.isRequired,
  carriers: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

