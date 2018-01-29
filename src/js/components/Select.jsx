import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const wrap = (event) => {
    console.log(event.currentTarget.value);
    console.log(props)
  };
  const items = [];
  props.data.forEach((element) => {    
    items.push(<option key={element}>{element}</option>);
  });
  items.unshift(<option key="allCompamies">{props.title}</option>);
  return <select onChange={wrap}>{items}</select>;
};

// Select.propTypes = {
//   data: PropTypes.object.isRequired,
//   onChange: PropTypes.func,
// };

export default Select;
