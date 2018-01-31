import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../styles.scss';

import correctDate from '../data/correctDate';
import Select from './Select';
import Cards from './Cards';
import { changeCompany, downloadData } from '../redux/actions';

class App extends React.Component {
  componentDidMount() {
    setTimeout(() => { // emulation response delay
      axios.get('data.json')
        .then((response) => {
          this.props.downloadData(response.data.flights);
        })
        .catch((error) => {
          alert('Ошибка загрузки данных');
          console.log(error);
        });
    }, 1500);
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
  flights: state.flights.filter((element) => {
    if (state.filterOption === '') {
      return state.flights;
    }
    return element.carrier === state.filterOption;
  }),
  carriers: new Set(state.flights.map(item => (item.carrier))),
  option: state.filterOption,
});

const mapDispatchToProps = dispatch => ({
  downloadData: (data) => {
    dispatch(downloadData(data));
  },
  changeCompany: (data) => {
    dispatch(changeCompany(data));
  },
});

App.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.object).isRequired,
  option: PropTypes.string.isRequired,
  changeCompany: PropTypes.func.isRequired,
  downloadData: PropTypes.func.isRequired,
  carriers: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

