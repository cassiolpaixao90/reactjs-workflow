import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isFunction } from 'lodash';
import cn from 'classnames';
import Label from '../Label';
import InputDescription from './InputDescription';
import InputErrors from './InputErrors';
import validateInput from '../../../validators/validators.input';
import './styles.scss';

class InputText extends Component {
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
      className,
      customBootstrapClass,
      deactivateErrorHighlight,
      disabled,
      errorsClassName,
      errorsStyle,
      inputClassName,
      inputDescription,
      inputDescriptionClassName,
      inputDescriptionStyle,
      inputStyle,
      label,
      labelClassName,
      labelStyle,
      name,
      noErrorsDescription,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      style,
      tabIndex,
      value,
    } = this.props;

    const handleBlur = isFunction(onBlur) ? onBlur : this.handleBlur;
    let spacer = !isEmpty(inputDescription) ? (
      <div className="spacer" />
    ) : (
      <div />
    );

    if (!noErrorsDescription && !isEmpty(this.state.errors)) {
      spacer = <div />;
    }

    const lStyle = !isEmpty(labelStyle) ? labelStyle : { marginTop: '3px' };

    return (
      <div
        className={cn(
          'inputTextWithErrors',
          customBootstrapClass,
          !isEmpty(className) && className
        )}
        style={style}
      >
        <Label
          className={labelClassName}
          htmlFor={name}
          message={label}
          style={lStyle}
        />

        <input
          autoFocus={autoFocus}
          className={cn(
            'inputText',
            'form-control',
            !deactivateErrorHighlight && this.state.errors && 'is-invalid',
            !isEmpty(className) && className
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
          type="text"
          value={value}
        />
        <InputDescription
          className={inputDescriptionClassName}
          message={inputDescription}
          style={inputDescriptionStyle}
        />
        <InputErrors
          className={errorsClassName}
          errors={(!noErrorsDescription && this.state.errors) || []}
          style={errorsStyle}
        />
        {spacer}
      </div>
    );
  }
}

InputText.defaultProps = {
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
  noErrorsDescription: false,
  placeholder: '',
  style: {},
  tabIndex: '0',
  validations: {},
};

InputText.propTypes = {
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
  noErrorsDescription: PropTypes.bool,
  onBlur: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  tabIndex: PropTypes.string,
  validations: PropTypes.object,
  value: PropTypes.string.isRequired,
};

export default InputText;
