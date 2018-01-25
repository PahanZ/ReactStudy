import React from 'react';

export default (props) => {
  const obj = {};
  props.data.forEach((element) => {
    obj[element.carrier] = null;
  });
  const items = Object.keys(obj).map((element, i) => <option key={i}>{element}</option>);
  items.unshift(<option key="allCompamies" onClick={props.onReset}>{props.title}</option>);
  return <select onChange={props.onChange}>{items}</select>;
};
