import React from 'react';
import { ReactComponent as BGImg } from './assets/bg-book-man.svg';

const Hero = () => (
  <section className='hero-section'>
    <div className='hero-section__copy'>
      <p className='hero-section__text'>
        Find your next great read, save to your queue, and track your progress! Use bibli however
        you want—it’s free and open-source.
      </p>
      <BGImg className='hero-section__image' />
    </div>
    <button className='hero-section__cta-button'>get bibli</button>
  </section>
);

export default Hero;
