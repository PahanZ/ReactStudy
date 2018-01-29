import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const obj = {};
  Object.values(props.data).forEach((item) => {
    obj[item] = null;
  });
  const items = Object.keys(obj).map((element, i) => <option key={i.toString()}>{element}</option>);
  items.unshift(<option key="allCompamies">{props.title}</option>);
  return <select onChange={props.onChange}>{items}</select>;
};

Select.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

export default Select;
