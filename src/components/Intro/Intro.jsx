import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { infoCard } from '../../constants/constants';
const cx = classNames.bind(styles);

export const Intro = () => {
  

  return (
    <section className={cx('intro')} id="articles">
      <h1 className={cx('intro-title')}>Benefits of Odigo</h1>

      <div className={cx('intro-benefits-card')}>
        {infoCard.map((item) => {
          return (
            <div key={item.title}>
              <img src={item.imgFile} alt={item.title} />
              <h3 className={cx('intro-benefits-title')}>{item.title}</h3>
              <p className={cx('intro-benefits-text')}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
