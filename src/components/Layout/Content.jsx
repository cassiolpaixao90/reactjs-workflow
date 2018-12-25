import React from 'react';
import './styles.css';

const Content = props => (
  <div className="content-wrapper">
    <section className="content">{props.children}</section>
  </div>
);

export default Content;
