import classNames from 'classnames/bind';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MoviesDetail from '../../MoviesDetail';
import styles from './DefaultLayout.module.scss';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { MovieDetail } = useSelector((state) => state.infoMovies);
    return (
        <div className={cx('wrapper')}>
            <Header />
            {/* <SearchMovies /> */}

            <div className={cx('body')}>{children}</div>
            <MoviesDetail movie={MovieDetail} showModal={MovieDetail ? true : false} />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
