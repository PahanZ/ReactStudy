import React from 'react';

export default (props) => {
  const obj = {};
  Array.prototype.forEach.call(props.data, (item) => {
    obj[item] = null;
    console.log(item);
  });
  const items = Object.keys(obj).map((element, i) => <option key={i.toString()}>{element}</option>);
  items.unshift(<option key="allCompamies">{props.title}</option>);
  return <select onChange={props.onChange}>{items}</select>;
};
