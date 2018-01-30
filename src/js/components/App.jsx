import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../styles.scss';

import correctDate from '../data/correctDate';
import Select from './Select';
import Cards from './Cards';

const App = ({
  flights, carriers, option, changeCompany,
}) => (
  <div className="container">
    <div>
      <Select
        data={carriers}
        title="All Carrier"
        option={option}
        onChange={changeCompany}
      />
    </div>
    <Cards data={flights()} correctdate={correctDate} />
  </div>
);

const mapStateToProps = state => ({
  flights: () => {
    if (state.filterOption === '') {
      return state.flights.flights;
    }
    return state.flights.flights.filter(element => element.carrier === state.filterOption);
  },
  carriers: new Set(state.flights.flights.map(item => (item.carrier))),
  option: state.filterOption,
});

const mapDispatchToProps = dispatch => ({
  changeCompany: (data) => {
    dispatch({
      type: 'setCompanyFilter',
      payload: data,
    });
  },
});

App.propTypes = {
  flights: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
  changeCompany: PropTypes.func.isRequired,
  carriers: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

