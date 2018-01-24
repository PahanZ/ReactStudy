import React from 'react';

export default (props) => {
  const items = props.data.map(element => <option key={element.id}>{element.carrier}</option>);
  items.unshift(<option key="allCompamies">{props.title}</option>);
  return <select>{items}</select>;
};

