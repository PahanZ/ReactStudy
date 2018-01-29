import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../styles.scss';

import correctDate from '../data/correctDate';
import Select from './Select.jsx';
import Cards from './Cards.jsx';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { careers: this.props.state };
//     this.change = this.change.bind(this);
//   }
//   change(event) {
//     if (event.target.value === 'All Carrier') {
//       this.setState({ careers: this.props.state });
//     } else {
//       const newState = this.props.state.filter(element => (
//         (element.carrier === event.target.value) ? element : null));
//       this.setState({ careers: newState });
//     }
//   }
//   render() {
//     return (
//       <div className="container">
//         <div>
//           <Select
//             data={this.props.state}
//             title="All Carrier"
//             onChange={this.change}
//           />
//         </div>
//         <Cards data={this.state.careers} correctdate={correctDate} />
//       </div>
//     );
//   }
// }
// const change = (event) => {
//   if (event.target.value === 'All Carrier') {
//     console.log(firstStoreUpload);
//     return firstStoreUpload;
//   }
//   const newState = state.filter(element => (
//     (element.carrier === event.target.value) ? element : null));
//   console.log(newState);
//   return newState;
// };


const App = ({ flights, companiesNames, options }) => {
  console.log(flights);
  return (
    <div className="container">
      <div>
        <Select
          data={companiesNames}
          title="All Carrier"
          onChange={options}
        />
      </div>
      <Cards data={flights} correctdate={correctDate} />
    </div>
  );
};
// const mapStateToProps = state => ({
//   data: state.flights,
//   carriers: state.flights.map(element => element.carrier),
//   options: state.filterOptions,
// });
const mapStateToProps = state => ({
  flights: state.flights.filter(element => {
    // console.log(element);
    return element.carrier === "KLM";
  }),
  // flights: state.filterOptions.companyName && state.flights.filter(flight =>
  // flight.companyName === state.filterOptions.companyName),
  companiesNames: new Set(state.flights.map(item => (item.carrier))),
  options: state.filterOption,
});


const mapDispatchToProps = dispatch => ({
  onChange: (data) => {
    dispatch({
      type: 'changeStore',
      payload: data,
    });
  },
  onSmth: (data2) => {
    dispatch({
      type: 'setCompanyFilter',
      payload: data2,
    });
  },
});

// App.propTypes = {
//   data: PropTypes.array.isRequired,
//   options: PropTypes.object.isRequired,
//   onChange: PropTypes.func,
// };


export default connect(mapStateToProps, mapDispatchToProps)(App);

