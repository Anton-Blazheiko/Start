import styles from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export const Intro = () => {
  return (
    <div className={cx('intro-container')}>
        Intro section
    </div>
  );
}