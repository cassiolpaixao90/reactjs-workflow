import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, map } from 'lodash';
import cn from 'classnames';
import './styles.scss';

const InputErrors = (props) => {
  const divStyle = Object.assign({ display: 'block' }, props.style);
  return (
    <React.Fragment>
      {map(props.errors, (error, key) => (
        <div
          className={cn(
            'form-control-feedback',
            'invalid-feedback',
            'errorContainer',
            !isEmpty(props.className) && props.className
          )}
          key={key}
          style={divStyle}
        >
          {error}
        </div>
      ))}
    </React.Fragment>
  );
};

InputErrors.defaultProps = {
  className: '',
  errors: [],
  style: {},
};

InputErrors.propTypes = {
  className: PropTypes.string,
  errors: PropTypes.array,
  style: PropTypes.object,
};

export default InputErrors;