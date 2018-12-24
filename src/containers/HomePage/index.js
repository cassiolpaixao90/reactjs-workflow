import React from 'react';
import './styles.scss';

const HomePage = () => (
  <React.Fragment>
    <div className="container">
      <div>
        <h1>Welcome !</h1>
        <p>
          This is the HomePage of your app therefore the access is not
          restricted
        </p>
        <p>
          Try to access a protected url by either changing the url from the
          browser or by clicking on the{' '}
        </p>
      </div>
    </div>
  </React.Fragment>
);

export default HomePage;
