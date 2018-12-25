import React from 'react';
import PropTypes from 'prop-types';
import InputPassword from './InputPassword';
import InputText from './InputText';
import InputEmail from './InputEmail';
import InputCheckbox from './InputCheckbox';

const DefaultInputError = ({ type }) => (
  <div>
    Your input type: <b>{type}</b> does not exist
  </div>
);

const inputs = {
  checkbox: InputCheckbox,
  email: InputEmail,
  // file: InputFileWithErrors,
  password: InputPassword,
  text: InputText,
};

function InputsIndex(props) {
  const inputValue = props.type === 'checkbox' || props.type === 'toggle'
    ? props.value || false
    : props.value || '';
  const Input = inputs[props.type] ? inputs[props.type] : DefaultInputError;

  return <Input {...props} value={inputValue} />;
}

InputsIndex.defaultProps = {};

InputsIndex.propTypes = {
  type: PropTypes.string.isRequired,
};

export default InputsIndex;
