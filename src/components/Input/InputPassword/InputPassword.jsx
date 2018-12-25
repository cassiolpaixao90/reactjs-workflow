/* eslint-disable no-mixed-operators */
import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isFunction } from 'lodash';
import cn from 'classnames';
import Label from '../Label';
import InputDescription from '../InputDescription';
import InputErrors from '../InputErrors';
import validateInput from '../../../validators/validators.input';
import './styles.css';

class InputPassword extends React.Component {
  state = { errors: [], hasInitialValue: false };

  componentDidMount() {
    const { value, errors } = this.props;

    if (!isEmpty(value)) {
      this.setState({ hasInitialValue: true });
    }

    if (!isEmpty(errors)) {
      this.setState({ errors });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.value) && !this.state.hasInitialValue) {
      this.setState({ hasInitialValue: true });
    }

    if (nextProps.didCheckErrors !== this.props.didCheckErrors) {
      const errors = isEmpty(nextProps.errors) ? [] : nextProps.errors;
      this.setState({ errors });
    }
  }

  handleBlur = ({ target }) => {
    if (!isEmpty(target.value) || this.state.hasInitialValue) {
      const errors = validateInput(target.value, this.props.validations);
      this.setState({ errors, hasInitialValue: true });
    }
  };

  render() {
    const {
      autoFocus,
      deactivateErrorHighlight,
      disabled,
      errorsClassName,
      errorsStyle,
      inputClassName,
      inputDescriptionClassName,
      inputDescriptionStyle,
      inputStyle,
      labelClassName,
      labelStyle,
      name,
      onChange,
      onFocus,
      placeholder,
      style,
      tabIndex,
      value,
      height,
    } = this.props;
    const handleBlur = isFunction(this.props.onBlur)
      ? this.props.onBlur
      : this.handleBlur;

    const eyeColor = this.state.showPassword
      ? { color: 'black' }
      : { color: '#9EA7B8' };

    const invariant = cn(
      'form-group',
      this.props.customBootstrapClass,
      !isEmpty(this.props.className) && this.props.className
    );

    const inputHeight = height === 'default' ? 'default' : `input-${height}`;

    return (
      <div className={invariant} style={style}>
        <Label
          className={labelClassName}
          htmlFor={name}
          message={this.props.label}
          style={labelStyle}
        />

        <input
          autoComplete="new-password"
          autoFocus={autoFocus}
          className={cn(
            'form-control',
            inputHeight,
            !deactivateErrorHighlight
              && !isEmpty(this.state.errors)
              && 'is-invalid',
            !isEmpty(inputClassName) && inputClassName
          )}
          disabled={disabled}
          id={name}
          name={name}
          onBlur={handleBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          style={style}
          tabIndex={tabIndex}
          type={(!this.state.showPassword && 'password') || 'text'}
          value={value}
        />
        <div className="iconEyeWrapper">
          <div
            className="iconEyeSubWrapper"
            onClick={this.handleClick}
            style={eyeColor}
          >
            <i className="fa fa-eye" />
          </div>
        </div>
        <InputDescription
          className={inputDescriptionClassName}
          message={this.props.inputDescription}
          style={inputDescriptionStyle}
        />
        <InputErrors
          className={errorsClassName}
          errors={this.state.errors}
          style={errorsStyle}
        />
      </div>
    );
  }
}

InputPassword.defaultProps = {
  autoFocus: false,
  className: '',
  customBootstrapClass: 'col-md-6',
  deactivateErrorHighlight: false,
  didCheckErrors: false,
  disabled: false,
  onBlur: false,
  onFocus: () => {},
  errors: [],
  errorsClassName: '',
  errorsStyle: {},
  inputClassName: '',
  inputDescription: '',
  inputDescriptionClassName: '',
  inputDescriptionStyle: {},
  inputStyle: {},
  label: '',
  labelClassName: '',
  labelStyle: {},
  placeholder: '',
  style: {},
  tabIndex: '0',
  validations: {},
  height: 'default',
};

InputPassword.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  customBootstrapClass: PropTypes.string,
  deactivateErrorHighlight: PropTypes.bool,
  didCheckErrors: PropTypes.bool,
  disabled: PropTypes.bool,
  errors: PropTypes.array,
  errorsClassName: PropTypes.string,
  errorsStyle: PropTypes.object,
  inputClassName: PropTypes.string,
  inputDescription: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  inputDescriptionClassName: PropTypes.string,
  inputDescriptionStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  labelClassName: PropTypes.string,
  labelStyle: PropTypes.object,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  tabIndex: PropTypes.string,
  validations: PropTypes.object,
  value: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default InputPassword;
