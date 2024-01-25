
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import Logo from '../../img/svg/Logo.jsx';
import IntroBackground from '../../img/intro-bg.jpg'
import { Input } from '../Input/Input.jsx';

const cx = classNames.bind(styles);

const menuItems = ['Articles', 'Locations', 'Sign in']


export const Header = () => {
  return (
    <header className={cx('header')}>
      <img  className={cx('header-intro-background')}src={IntroBackground}/>
      <div className={cx('header-nav-container')}>
     
      <Logo/>

      <nav className={cx('header-nav')}>
        <ul className={cx('header-nav-ul')}>
          {menuItems.map(item => {
            return <li className={cx('header-nav-ul-li')} key={item}>{item}</li>
          })}
        </ul>
      </nav>
  
    </div>
    
    <div className={cx('header-text')}>
        <h1 className={cx('header-text-heading-title')}>Discover Amazing places in Japan</h1>
        <p className={cx('header-text-heading-paragraph')}>Jump off balcony, onto strangers head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, </p>
        
    </div>

          <div className={cx('header-inputs')}>
             <Input placeholder="What would you like to do?" />
             <div className={cx('header-inputs-with-margin')}>
                <Input placeholder="What would you like to do?" />
             </div>
          </div>
       
    </header>
  );
}
