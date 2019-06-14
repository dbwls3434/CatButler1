import React, { Fragment } from 'react';
import './scss/App.scss';

const App = () => {
  return (
    <Fragment>
      <nav class='navbar bg-dark'>
        <h1>
          <a href='dashboard.html'>
            {' '}
            <i class='fas fa-code' /> DevConnector{' '}
          </a>
        </h1>
        <ul>
          <li>
            <a href='profiles.html'>Developers</a>
          </li>
          <li>
            <a href='posts.html'>Posts</a>
          </li>
          <li>
            <a href='dashboard.html'>
              <i class='fas fa-user' />
              <span class='hide-sm'> Dashboard</span>
            </a>
          </li>
          <li>
            <a href='login.html'>
              <i class='fas fa-sign-out-alt' />
              <span class='hide-sm'> Logout</span>
            </a>
          </li>
        </ul>
      </nav>
      <section class='container'>
        <h1 class='large text-primary'>HEADING</h1>
        <p class='lead'>
          <i class='fas fa-user' /> TEXT
        </p>
      </section>
    </Fragment>
  );
};

export default App;
