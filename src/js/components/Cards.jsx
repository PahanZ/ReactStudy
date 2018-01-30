import React from 'react';
import correctDate from '../data/correctDate';

const Cards = (props) => {
  const card = Object.values(props.data).map(element => (
    <div key={element.id.toString()} className="card">
      <div key={`Carrier${element.id}`}>{`Carrier: ${element.carrier}`}</div>
      <div key={`From${element.id}`}>{`From: ${element.direction.from}`}</div>
      <div key={`To${element.id}`}>{`To: ${element.direction.to}`}</div>
      <div key={`Arrival${element.id}`}>{`Arrival: ${correctDate(element.arrival)}`}</div>
      <div key={`Departure${element.id}`}>{`Departure: ${correctDate(element.departure)}`}</div>
    </div>
  ));
  return card;
};

export default Cards;
