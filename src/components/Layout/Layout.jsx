import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const Layout = () => (
    <main className={cx('main')}>
        Layout component
    </main>
)

