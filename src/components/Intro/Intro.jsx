import styles from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export const Intro = () => {
  return (
    <section className={cx('intro')}>
        <h1 className={cx('intro-title')}>Benefits of Odigo</h1>
    </section>
  );
}