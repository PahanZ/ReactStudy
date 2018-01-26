import React from 'react';

export default (props) => {
  const obj = {};
  props.data.forEach((element) => {
    obj[element.carrier] = null;
  });
  const items = Object.keys(obj).map((element, i) => <option key={i.toString()}>{element}</option>);
  items.unshift(<option key="allCompamies">{props.title}</option>);
  console.log(items)
  return <select onChange={props.onChange}>{items}</select>;
};
