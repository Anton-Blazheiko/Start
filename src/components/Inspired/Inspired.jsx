import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const Inspired = () => {
  return (
    <section>
      <h1 className={cx('inspired-title')} id="locations">
        Get inspired for your next trip
      </h1>
      <span className={cx('inspired-title-line')} />
    </section>
  );
};
