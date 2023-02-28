import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../store/actions';
import styles from './MoviesDetail.module.scss';

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
                                    <span className={cx('rating')}>Rating: {movie.vote_average * 100}%</span>
                                    <span className={cx('popularity')}>Popularity: {movie.popularity}</span>
                                </p>
                                <p className={cx('release-date')}>Release Date: {movie.release_date}</p>
                                <p className={cx('overview')}>{movie.overview}</p>
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
