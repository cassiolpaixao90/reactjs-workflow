import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isFunction, map } from 'lodash';
import cn from 'classnames';
import validateInput from '../../validators/validators.input';
import If from '../Operator/If';

class InputEmail extends React.Component {
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
      const errors = validateInput(
        target.value,
        this.props.validations,
        'email'
      );
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
      height,
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

    const inputHeight = height === 'default' ? 'default' : `input-${height}`;
    const invariantClassName = cn(
      'form-group',
      this.props.customBootstrapClass,
      !isEmpty(this.props.className) && this.props.className,
      { 'has-error': !noErrorsDescription && this.state.errors.length > 0 }
    );

    return (
      <div className={invariantClassName} style={style}>
        <If test={label}>
          <label htmlFor={name}>{label}</label>
        </If>

        <input
          autoFocus={autoFocus}
          className={cn(
            'form-control',
            inputHeight,
            !deactivateErrorHighlight && this.state.errors && 'is-invalid',
            !deactivateErrorHighlight
              && this.state.errors
              && this.state.isFocused
          )}
          disabled={disabled}
          id={name}
          name={name}
          onBlur={this.handleBlur}
          onChange={onChange}
          onFocus={this.handleFocus}
          placeholder={placeholder}
          tabIndex={tabIndex}
          type="email"
          value={value}
        />

        {map(this.state.errors, (error, key) => (
          <small className="help-block" key={key}>
            {error}
          </small>
        ))}
      </div>
    );
  }
}

InputEmail.defaultProps = {
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
  height: 'default',
};

InputEmail.propTypes = {
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
  height: PropTypes.string,
};

export default InputEmail;
