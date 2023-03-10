import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../store/actions';
import styles from './MoviesDetail.module.scss';
import { PlayFilmIcon } from '../Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// const showModal = true;
function MoviesDetail(props) {
    const { movie, showModal } = props;
    // console.log(movie);
    const dispatch = useDispatch();
    const handleHideMovieDetail = () => {
        dispatch(setMovieDetail(null));
    };
    if (movie) {
        return (
            <div className={cx('movies-detail')}>
                <div
                    className={cx('backdrop', `${showModal ? 'showBackdrop' : 'hideBackdrop'}`)}
                    onClick={handleHideMovieDetail}
                >
                    <div
                        className={cx('modal', `${showModal ? 'showModal' : 'hideModal'}`)}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w500${
                                movie.poster_path || movie.backrop_path
                            })`,
                            backgroundSize: 'auto',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className={cx('container')}>
                            <div className={cx('movies-info')}>
                                <h1 className={cx('movie-title')}>{movie.title || movie.original_title}</h1>
                                <p className={cx('statistical')}>
                                    <span className={cx('rating')}>Độ trùng: {movie.vote_average * 10}%</span>
                                    <span className={cx('popularity')}>Phổ biến: {movie.popularity}</span>
                                </p>
                                <p className={cx('release-date')}>Ngày ra mắt: {movie.release_date}</p>
                                <p className={cx('overview')}>{movie.overview}</p>
                            </div>
                            <div className={cx('movies-action')}>
                                <Link to={'/watch/:id'} className={cx('play-btn')}>
                                    <div className={cx('icon-play')}>
                                        <PlayFilmIcon />
                                    </div>
                                    <span className={cx('icon-title')}>Phát</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}

export default MoviesDetail;
