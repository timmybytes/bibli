import React from 'react';
import { ReactComponent as Logo } from './assets/Logo.svg';

const Header = () => (
  <>
    <header className='header'>
      <div className='header__logo-container'>
        <Logo />
      </div>
      <div className='header__buttons-container'>
        <div className='header__buttons-button'>
          <div className='header__buttons-button--queue'>
            <button className='header__buttons-button--queue-button'>
              queue
              <div className='header__buttons-button--queue-indicator'>0</div>
            </button>
          </div>
        </div>
        <div className='header__buttons-button'>
          <button className='header__buttons-button--about'>about</button>
        </div>
        <div className='header__buttons-button'>
          <button className='header__buttons-button--signinout'>sign in</button>
        </div>
      </div>
    </header>
  </>
);

export default Header;
