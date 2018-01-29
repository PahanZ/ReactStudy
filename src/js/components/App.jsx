import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../styles.scss';

import correctDate from '../data/correctDate';
import Select from './Select.jsx';
import Cards from './Cards.jsx';

const App = ({ flights, carriers, option, changeCompany }) => {
  // console.log(onChange);
  return (
    <div className="container">
      <div>
        <Select
          data={carriers}
          title="All Carrier"
          option={option}
          onChange={changeCompany}
        />
      </div>
      <Cards data={flights} correctdate={correctDate} />
    </div>
  );
};
const mapStateToProps = state => ({
  flights: state.flights.map(element => {
    console.log(element);
    return element;
  }),
  // flights: state.filterOptions.companyName && state.flights.filter(flight =>
  // flight.companyName === state.filterOptions.companyName),
  carriers: new Set(state.flights.map(item => (item.carrier))),
  option: state.filterOption,
});

const mapDispatchToProps = dispatch => ({
  onChange: (data) => {
    dispatch({
      type: 'changeStore',
      payload: data,
    });
  },
  changeCompany: (data) => {
    dispatch({
      type: 'setCompanyFilter',
      payload: data,
    });
  },
});

// App.propTypes = {
//   data: PropTypes.array.isRequired,
//   options: PropTypes.object.isRequired,
//   onChange: PropTypes.func,
// };


export default connect(mapStateToProps, mapDispatchToProps)(App);

