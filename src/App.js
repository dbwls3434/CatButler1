import React, { Fragment } from 'react';
import './scss/App.scss';

const App = () => {
  const openSlideMenu = e => {
    document.getElementById('side-menu').style.width = '250px';
    //document.getElementById('main').style.marginRight = '250px';
  };

  const closeSlideMenu = e => {
    document.getElementById('side-menu').style.width = '0';
    //document.getElementById('main').style.marginRight = '0';
  };

  return (
    <Fragment>
      <nav className='navbar bg-dark'>
        <h1>
          <a href='#!'>
            {' '}
            <i className='fas fa-cat' /> CatButler{' '}
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
            <a href='#!' onClick={e => openSlideMenu(e)}>
              <i className='fas fa-bars fa-2x' />
            </a>
          </li>
        </ul>
      </nav>

      <div id='side-menu' className='side-nav'>
        <a href='#!' className='btn-close' onClick={e => closeSlideMenu(e)}>
          &times;
        </a>
        <a href='#!'>Home</a>
        <a href='#!'>About</a>
        <a href='#!'>Services</a>
        <a href='#!'>Contact</a>
      </div>

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
