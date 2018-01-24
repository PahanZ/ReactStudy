import React from 'react';
import ReactDOM from 'react-dom';
import '../styles.scss';

import correctDate from './correctDate';
import info from './getData';
import Select from './components/Select.jsx';
import Cards from './components/Cards.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    return (
      <div className="container">
        <select>
          <Select data={info.flights} title="All Carrier" />
        </select>
        <Cards data={info} correctdate={correctDate} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
