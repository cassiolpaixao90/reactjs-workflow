import React from 'react';
import './styles.scss';
import Content from '../../components/Layout/Content';

const HomePage = () => (
  <Content>
    <div>
      <h1>Welcome !</h1>
      <p>
        This is the HomePage of your app therefore the access is not restricted
      </p>
      <p>
        Try to access a protected url by either changing the url from the
        browser or by clicking on the{' '}
      </p>
    </div>
  </Content>
);

export default HomePage;
