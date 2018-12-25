import React from 'react';
import PropTypes from 'prop-types';
import InputCheckboxWithErrors from '../InputCheckboxWithErrors';
import InputFileWithErrors from '../InputFileWithErrors';
import InputPassword from '../InputPassword/InputPassword';
import InputText from '../InputText/InputText';
import InputEmail from '../InputEmail/InputEmail';

const DefaultInputError = ({ type }) => (
  <div>
    Your input type: <b>{type}</b> does not exist
  </div>
);

const inputs = {
  checkbox: InputCheckboxWithErrors,
  email: InputEmail,
  file: InputFileWithErrors,
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
