import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isFunction, map } from 'lodash';
import cn from 'classnames';

class InputCheckbox extends Component {
  state = { errors: [] };

  handleChange = () => {
    const target = {
      name: this.props.name,
      type: 'checkbox',
      value: !this.props.value,
    };

    this.props.onChange({ target });
  };

  componentDidMount() {
    const { errors } = this.props;
    if (!isEmpty(errors)) {
      this.setState({ errors });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.didCheckErrors !== this.props.didCheckErrors) {
      const errors = isEmpty(nextProps.errors) ? [] : nextProps.errors;
      this.setState({ errors });
    }
  }

  render() {
    const {
      name,
      autoFocus,
      className,
      customBootstrapClass,
      disabled,
      errorsClassName,
      errorsStyle,
      inputClassName,
      inputDescription,
      inputDescriptionClassName,
      inputDescriptionStyle,
      inputStyle,
      label,
      noErrorsDescription,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      style,
      tabIndex,
      title,
      value,
    } = this.props;

    const handleBlur = onBlur;
    let inputTitle = title;

    let spacer = !isEmpty(inputDescription) ? (
      <div className="spacer" />
    ) : (
      <div />
    );

    if (!noErrorsDescription && !isEmpty(this.state.errors)) {
      spacer = <div />;
    }

    if (isFunction(title)) {
      inputTitle = title();
    }

    const checkbox = (
      <input
        autoFocus={autoFocus}
        checked={value}
        disabled={disabled}
        id={name}
        onBlur={onBlur}
        onChange={this.handleChange}
        onFocus={onFocus}
        tabIndex={tabIndex}
        type="checkbox"
      />
    );

    let content = <div />;

    if (typeof label === 'string') {
      content = (
        <label
          className={cn('form-group col-md-12', disabled && 'disabled')}
          htmlFor={name}
        >
          {checkbox}
          {label}
        </label>
      );
    }

    if (isFunction(label)) {
      content = (
        <label
          className={cn('form-check-label', disabled && 'disabled')}
          htmlFor={name}
        >
          {checkbox}
          {label()}
        </label>
      );
    }

    return (
      <div
        className={cn(
          'form-group',
          'checkbox',
          'col-md-12',
          !isEmpty(className) && className
        )}
        style={style}
      >
        {content}

        {map(this.state.errors, (error, key) => (
          <small className="help-block" key={key}>
            {error}
          </small>
        ))}
      </div>
    );
  }
}

InputCheckbox.defaultProps = {
  autoFocus: false,
  className: '',
  customBootstrapClass: 'col-md-3',
  didCheckErrors: false,
  disabled: false,
  onBlur: () => {},
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
  noErrorsDescription: false,
  placeholder: '',
  style: {},
  tabIndex: '0',
  title: '',
  validations: {},
  value: false,
};

InputCheckbox.propTypes = {
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
  name: PropTypes.string.isRequired,
  noErrorsDescription: PropTypes.bool,
  onBlur: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  tabIndex: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  validations: PropTypes.object,
  value: PropTypes.bool,
};

export default InputCheckbox;
