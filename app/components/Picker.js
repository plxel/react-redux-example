import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';

import 'react-select/dist/react-select.css';

const Picker = ({ selected, options, onChange, placeholder, className }) => (
  <Select
    value={selected}
    options={options}
    onChange={onChange}
    placeholder={placeholder}
    resetValue=""
    className={className}
  />
)

Picker.propTypes = {
  selected: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string
}

export default Picker
