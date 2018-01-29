import React from 'react';
import PropTypes from 'prop-types';
import correctDate from '../data/correctDate';

const Cards = (props) => {
  const card = Object.values(props.data).map((element, i) => {
    console.log(element);
    return (
      <div key={i.toString()} className="card">
        <div key={`Carrier${element.id}`}>{`Carrier: ${element.carrier}`}</div>
        <div key={`From${element.id}`}>{`From: ${element.direction.from}`}</div>
        <div key={`To${element.id}`}>{`To: ${element.direction.to}`}</div>
        <div key={`Arrival${element.id}`}>{`Arrival: ${correctDate(element.arrival)}`}</div>
        <div key={`Departure${element.id}`}>{`Departure: ${correctDate(element.departure)}`}</div>
      </div>
    );
  });
  return card;
};

// Cards.propTypes = {
//   data: PropTypes.array.isRequired,
// };

export default Cards;
