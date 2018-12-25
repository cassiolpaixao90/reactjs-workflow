import React from 'react';

const If = (props) => {
  if (props.test) {
    return props.children;
  }
  return false;
};
export default If;
