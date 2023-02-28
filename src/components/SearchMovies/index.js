import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './SearchMovies.module.scss';
import Image from '../Image';
import { useViewport } from '../../hooks';
import { getSearchMovies, setMovieDetail } from '../../components/store/actions';

const cx = classNames.bind(styles);

const useQuery = () => new URLSearchParams(useLocation().search);

function SearchMovies(props) {
    const [windowDimensions] = useViewport();
    const dispatch = useDispatch();
    const { SearchMovies } = useSelector((state) => state.infoMovies);
    const keyword = useQuery().get('q');

    useEffect(() => {
        if (keyword) dispatch(getSearchMovies(keyword));
    }, [keyword, dispatch]);

    return (
        <div className={cx('search-pane')}>
            {SearchMovies && SearchMovies.length > 0 ? (
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
                    {SearchMovies.map((movie, index) => {
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
            ) : (
                <div className={cx('search-not-found')}>
                    <h1>Tìm kiếm cho "aaaaaaaa" không tồn tại</h1>
                </div>
            )}
        </div>
    );
}
export default SearchMovies;
