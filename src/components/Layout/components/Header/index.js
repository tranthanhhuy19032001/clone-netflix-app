import { useState } from 'react';
import Tippy from '@tippyjs/react';
import { Link, useNavigate } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faEllipsisVertical, faPen, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import NetflixLogo from '../../../../assets/images/Netflix_Logo_RGB.png';
// import Avatar from '../../../../assets/images/avatar.jpg';
import { SearchIcon, NotificationIcon } from '../../../Icons';
import Menu from '../../../Popper/Menu';
import Image from '../../../Image';
import { useScroolY } from '../../../../hooks';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const [scrollY] = useScroolY();

    //Search Handle
    const [searchKey, setSearchKey] = useState('');
    const navigate = useNavigate();

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const handleClickSearchIconBtn = (e) => {
        // e.target.style.display = 'none';
        const searchIconBtn = document.querySelector('#search-icon-btn');
        searchIconBtn.style.display = 'none';
        const searchBtn = document.querySelector('#search-btn');
        searchBtn.style.display = 'flex';
        searchBtn.style.opacity = 1;
        searchBtn.style.transition = 'opacity 1s';

        const searchInput = document.querySelector('#search-input');
        searchInput.focus();
    };

    const handleOnBlurSearchBtn = (e) => {
        if (!searchKey) {
            const searchIconBtn = document.querySelector('#search-icon-btn');
            searchIconBtn.style.display = 'flex';

            const searchBtn = document.querySelector('#search-btn');
            searchBtn.style.display = 'none';
        }
    };

    const handleChangeInput = (e) => {
        let keyword = e.target.value;
        setSearchKey(keyword);
        if (keyword.length > 0) {
            navigate(`/search?q=${keyword.trim()}`);
        } else navigate('/');
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faPen} />,
            title: 'View profile',
            to: '/@huy',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Tài khoản',
            to: '/account',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout',
        },
    ];

    return (
        <div
            style={scrollY < 50 ? { backgroundColor: 'transparent' } : { backgroundColor: 'var(--black)' }}
            className={cx('header')}
        >
            <div className={cx('fadeBottom')}></div>
            <div className={cx('nav-container')}>
                <div className={cx('nav-left')}>
                    <Link to={'/'}>
                        <img className={cx('header-logo')} src={NetflixLogo} alt="" />
                    </Link>
                    <nav className={cx('nav')}>
                        <ul className={cx('nav-menu')}>
                            <Tippy
                                delay={[0, 50]}
                                interactive={true}
                                content={
                                    <div className={cx('nav-tippy')}>
                                        <div className={cx('nav-tippy-item')}>
                                            <Link to={'/'}>Trang chủ</Link>
                                        </div>
                                        <div className={cx('nav-tippy-item')}>
                                            <Link to={'/genre/83'}>Phim T.hình</Link>
                                        </div>
                                    </div>
                                }
                                placement="bottom"
                            >
                                <li className={cx('menu-trigger')}>
                                    <Link to={'#'}>
                                        Duyệt tìm
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </Link>
                                </li>
                            </Tippy>
                            <li className={cx('menu-tab')}>
                                <Link to={'/'}>Trang chủ</Link>
                            </li>
                            <li className={cx('menu-tab')}>
                                <Link to={'/genre/83'}>Phim T.hình</Link>
                            </li>
                            <li className={cx('menu-tab')}>
                                <Link to={'/genre/34399'}>Phim</Link>
                            </li>
                            <li className={cx('menu-tab')}>
                                <Link to={'/latest'}>Mới & phổ biến nhất</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={cx('nav-right')}>
                    <div className={cx('nav-element')}>
                        <div className={cx('search-box')}>
                            <SearchIcon
                                onClick={handleClickSearchIconBtn}
                                id="search-icon-btn"
                                className={cx('search-icon-btn')}
                            />

                            <div onBlur={handleOnBlurSearchBtn} id="search-btn" className={cx('search-btn')}>
                                <button className={cx('search-icon')}>
                                    <SearchIcon />
                                </button>
                                <input
                                    id="search-input"
                                    className={cx('search-input')}
                                    type="text"
                                    placeholder="Phim, diễn viên, thể loại..."
                                    onChange={handleChangeInput}
                                    value={searchKey}
                                    // hidden
                                />
                            </div>
                        </div>
                    </div>

                    <div className={cx('nav-element')}>
                        <span className={cx('notification-box')}>
                            <Tippy
                                delay={[0, 50]}
                                content={<p style={{ padding: 30 }}>Không có nội dung thông báo ở đây</p>}
                                placement="bottom"
                            >
                                <button className={cx('notification-btn')}>
                                    <NotificationIcon />
                                </button>
                            </Tippy>
                        </span>
                    </div>
                    <div className={cx('nav-element')}>
                        <div className={cx('avatar-box')}>
                            <Menu items={userMenu} onChange={handleMenuChange}>
                                {currentUser ? (
                                    <Image
                                        className={cx('user-avatar')}
                                        src="../../../../assets/images/avatar.jpg"
                                        alt="Nguyen Van A"
                                    />
                                ) : (
                                    <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button>
                                )}
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
