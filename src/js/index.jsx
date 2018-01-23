import React from 'react';
import ReactDOM from 'react-dom';
import '../styles.scss';

import data from './data.json';
import Correctdate from './correctDate';

const ShowCarrier = (props) => {
  const items = props.data.map(element => <option key={element.id}>{element.carrier}</option>);
  items.unshift(<option key="allCompamies">{props.title}</option>);
  return items;
};

const RenderFrom = () => (
  <div>
    <RenderFromInfo data={data.flights} title="Отправление:" />
  </div>
);

const RenderFromInfo = (props) => {
  const items = props.data.map(element => <div key={element.id}>{element.direction.from}</div>);
  items.unshift(<div key="from">{props.title}</div>);
  return items;
};

const RenderToInfo = (props) => {
  const items = props.data.map(element => <div key={element.id}>{element.direction.to}</div>);
  items.unshift(<div key="to">{props.title}</div>);
  return items;
};

const RenderTo = () => (
  <div>
    <RenderToInfo data={data.flights} title="Прибытие:" />
  </div>
);

const RenderArrivalInfo = (props) => {
  const items = props.data.map(element => (
    <div key={element.id}>{Correctdate(element.arrival)}</div>));
  items.unshift(<div key="arrival">{props.title}</div>);
  return items;
};

const RenderArrival = () => (
  <div>
    <RenderArrivalInfo data={data.flights} title="Прибытие в" />
  </div>
);

const RenderDepartureInfo = (props) => {
  const items = props.data.map(element => (
    <div key={element.id}>{Correctdate(element.departure)}</div>));
  items.unshift(<div key="departure">{props.title}</div>);
  return items;
};

const RenderDeparture = () => (
  <div>
    <RenderDepartureInfo data={data.flights} title="Отправление в" />
  </div>
);

const App = () => (
  <div className="container">
    <select>
      <ShowCarrier data={data.flights} title="Все авиакомпании" />
    </select>
    <RenderFrom />
    <RenderTo />
    <RenderArrival />
    <RenderDeparture />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
