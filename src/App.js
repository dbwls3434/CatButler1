import React, { Fragment } from 'react';
import './scss/App.scss';

const App = () => {
  return (
    <Fragment>
      <nav className='navbar bg-dark'>
        <h1>
          <a href='#!'>
            {' '}
            <i class="fas fa-cat"></i> CatButler{' '}
          </a>
        </h1>
        <ul className='nav-items'>
          <li>
            <a href='#!'>
              <i className='fas fa-sign-in-alt' />
              <span className='hide-sm'> Login</span>
            </a>
          </li>
          <li>
            <a href='#!'>
              <i className='fas fa-sign-out-alt' />
              <span className='hide-sm'> Logout</span>
            </a>
          </li>
          <li className='nav-hamburger'>
            <a href='#!'><i className='fas fa-bars fa-2x'></i></a>
          </li>
        </ul>
      </nav>
      <section className='container'>
        <h1 className='large text-primary'>HEADING</h1>
        <p className='lead'>
          <i className='fas fa-user' /> TEXT
        </p>
      </section>
    </Fragment>
  );
};

export default App;
