import React, { Fragment } from 'react';

const Navbar = () => {
  const openSlideMenu = e => {
    document.getElementById('side-menu').style.width = '250px';
  };

  const closeSlideMenu = e => {
    document.getElementById('side-menu').style.width = '0';
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
              <i className='far fa-registered' />
              <span className='hide-sm'> Register</span>
            </a>
          </li>
          <li>
            <a href='#!'>
              <i className='fas fa-sign-in-alt' />
              <span className='hide-sm'> LogIn</span>
            </a>
          </li>
          <li>
            <a href='#!'>
              <i className='fas fa-sign-out-alt' />
              <span className='hide-sm'> LogOut</span>
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
    </Fragment>
  );
};

export default Navbar;
