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
            <a href='#!'>Menu1</a>
          </li>
          <li>
            <a href='#!'>Menu2</a>
          </li>
          <li>
            <a href='#!'>Menu3</a>
          </li>
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
        </ul>
        <div className='nav-hamburger'>
          <i className='fas fa-bars fa-2x'></i>
        </div>
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
