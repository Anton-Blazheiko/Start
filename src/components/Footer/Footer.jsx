import LogoFooter from '../../img/svg/LogoFooter.jsx';

import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <LogoFooter />
    </footer>
  );
};
