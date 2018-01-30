import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../styles.scss';

import correctDate from '../data/correctDate';
import Select from './Select';
import Cards from './Cards';


class App extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      axios.get('../data/data.json')
        .then((response) => { console.log(response); })
        .catch((error) => { console.log(error); });
    }, 1000);
  }
  render() {
    return (
      <div className="container">
        <div>
          <Select
            data={this.props.carriers}
            title="All Carrier"
            option={this.props.option}
            onChange={this.props.changeCompany}
          />
        </div>
        <Cards data={this.props.flights} correctdate={correctDate} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // flights: state.flights.flights.filter((element) => {
  //   if (state.filterOption === '') {
  //     return state.flights.flights;
  //   }
  //   return element.carrier === state.filterOption;
  // }),
  // carriers: new Set(state.flights.flights.map(item => (item.carrier))),
  // option: state.filterOption,
});

const mapDispatchToProps = dispatch => ({
  downloadData: (data) => {
    dispatch({
      type: 'downloadData',
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
//   flights: PropTypes.array.isRequired,
//   option: PropTypes.string.isRequired,
//   changeCompany: PropTypes.func.isRequired,
//   carriers: PropTypes.shape({
//     Entries: PropTypes.string,
//   }).isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);

