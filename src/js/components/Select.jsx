import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const wrap = event => (props.onChange(event.currentTarget.value));
  const items = Array.from(props.data).map(element => <option key={element}>{element}</option>);
  items.unshift(<option key="allCompamies" value="">{props.title}</option>);
  return <select onChange={wrap} value={props.option}>{items}</select>;
};

Select.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
  data: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
};

export default Select;
