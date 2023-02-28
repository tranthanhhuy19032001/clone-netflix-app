import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TVMovies.module.scss';
import Image from '../Image';
import { useViewport } from '../../hooks';
import { setMovieDetail } from '../store/actions';

const cx = classNames.bind(styles);

function TVMovies(props) {
    const [windowDimensions] = useViewport();
    const dispatch = useDispatch();
    const { TVMovies } = useSelector((state) => state.infoMovies);

    return (
        <div className={cx('search-pane')}>
            {TVMovies && (
                <div
                    className={cx('search-content')}
                    style={{
                        gridTemplateColumns: `repeat(${
                            windowDimensions.width > 1200
                                ? 5
                                : windowDimensions.width > 992
                                ? 4
                                : windowDimensions.width > 768
                                ? 3
                                : windowDimensions.width > 600
                                ? 2
                                : 1
                        }, auto)`,
                    }}
                >
                    {TVMovies.map((movie, index) => {
                        if (movie.poster_path !== null || movie.backdrop_path !== null) {
                            let urlImg = `https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`;
                            return (
                                <div
                                    onClick={() => dispatch(setMovieDetail(movie))}
                                    className={cx('movie-item')}
                                    key={index}
                                >
                                    <Image className={cx('movie-img')} src={urlImg} />
                                </div>
                            );
                        } else {
                            return false;
                        }
                    })}
                </div>
            )}
        </div>
    );
}
export default TVMovies;
