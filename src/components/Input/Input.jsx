import PropTypes from 'prop-types';
import CicleIco from '../../img/svg/CircleIco';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const Input = ({ placeholder, type = 'text' }) => (

  <div className={cx('input')}>
    <CicleIco />
    <input className={cx('input-text')} type={type} placeholder={placeholder} />
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired
};
