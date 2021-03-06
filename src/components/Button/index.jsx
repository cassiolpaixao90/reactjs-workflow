import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import cn from 'classnames';

import './styles.css';

function Button(props) {
  const buttonProps = Object.assign({}, props);
  const propsToDelete = ['primary', 'social'];

  propsToDelete.map(value => delete buttonProps[value]);

  const label =
    !isEmpty(props.label) && !props.children ? (
      <span>{props.label}</span>
    ) : (
      props.children
    );

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={cn('button')}
      type={props.type || 'button'}
      {...buttonProps}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  label: PropTypes.string,
  primary: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
