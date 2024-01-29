import { useState, useEffect } from 'react';
import { Input } from '../Input/Input.jsx';
import Logo from '../../img/svg/Logo.jsx';

import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const menuItems = ['Articles', 'Locations', 'Videos'];

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkIsSticky);
    return () => {
      window.removeEventListener('scroll', checkIsSticky);
    };
  });

  const checkIsSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? setIsSticky(true) : setIsSticky(false);
  };

  const scrollIntoHandler = (e) => {
    const element = document.getElementById(e.target.innerText.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toTopClickHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <header className={cx('header')}>
      <div className={cx(`${isSticky ? 'header-nav-container-is-sticky' : 'header-nav-container'}`)}>
        <span className={cx('header-logo')} onClick={toTopClickHandler}>
          <Logo />
        </span>

        <nav className={cx(`header-nav`)}>
          <ul className={cx('header-nav-ul')}>
            {menuItems.map((item) => {
              return (
                <li className={cx('header-nav-ul-li')} key={item} onClick={(e) => scrollIntoHandler(e)}>
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className={cx('header-text')}>
        <h1 className={cx('header-text-heading-title')}>Discover Amazing places in Japan</h1>
        <p className={cx('header-text-heading-paragraph')}>
          Jump off balcony, onto strangers head. Chase ball of string hide when guests come over. Being gorgeous with
          belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door,{' '}
        </p>

        <div className={cx('header-inputs')}>
          <Input placeholder="What would you like to do?" />
          <div className={cx('header-inputs-with-margin')}>
            <Input placeholder="Where would you like to go?" />
          </div>
        </div>
      </div>
    </header>
  );
};
