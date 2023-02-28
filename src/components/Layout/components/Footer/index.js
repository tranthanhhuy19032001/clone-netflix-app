import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('contact')}>
                <div className={cx('phone')}>Phone: 0366269096</div>
                <div className={cx('email')}>
                    Email:{' '}
                    <a href="mailto:tranthanhhuy19032001.ltp@gmail.com" target="_blank" rel="noreferrer">
                        tranthanhhuy19032001.ltp@gmail.com
                    </a>
                </div>
            </div>
            <div className={cx('copywriting')}>Copyright©2023 by ThanhHuy</div>
        </footer>
    );
}

export default Footer;
