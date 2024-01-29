import styles from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export const Intro = () => {
  const infoCard = [
    {
      imgFile: '',
      title: 'Welcome to Odigo!',
      text: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.",
    },
    {
      imgFile: '',
      title: 'Your Personal Japan Guide',
      text: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.",
    },
    {
      imgFile: '',
      title: 'Promoting Local Businesses',
      text: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.",
    },
  ];

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
