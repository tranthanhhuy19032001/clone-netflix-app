import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './MoviesRow.module.scss';
import Image from '../Image';
import { SmoothHorizontalScrolling } from '../../utils';
import { useViewport } from '../../hooks';
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../store/actions';

const cx = classNames.bind(styles);

function MoviesRow(props) {
    const { movies, title } = props;
    // const iconLeft = document.getElementById('icon-left');
    const slideRef = useRef();
    const movieRef = useRef();
    const [scrollLeft, setScrollLeft] = useState(0);
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isdrag, setIsDrag] = useState(false);
    const [isShowIconLeft, setIsShowIconLeft] = useState(false);
    const [isPaddingStart, setIsPaddingStart] = useState(false);
    const [windowDimensions] = useViewport();
    const dispatch = useDispatch();

    const contentRowClassname = cx('content-row', {
        isPaddingStart,
    });
    const iconLeftClassname = cx('icon-left', { isActive: isShowIconLeft });

    //Display button scroll right
    useEffect(() => {
        if (scrollLeft === 0) {
            setIsShowIconLeft(false);
        } else {
            setIsShowIconLeft(true);
        }
    }, [scrollLeft]);

    //Handle draggale scroll
    useEffect(() => {
        if (isdrag) {
            if (dragDown > dragMove) handleScollRight();
            if (dragDown < dragMove) handleScollLeft();
        }
    }, [dragDown, dragMove, isdrag]);

    const handleScollRight = () => {
        setIsPaddingStart(true);

        const maxscrollWidth = slideRef.current.scrollWidth - slideRef.current.clientWidth;
        if (slideRef.current.scrollLeft < maxscrollWidth) {
            SmoothHorizontalScrolling(
                slideRef.current,
                250,
                movieRef.current.clientWidth * 2,
                slideRef.current.scrollLeft,
            );
        }
        setScrollLeft(slideRef.current.scrollLeft + 1);
    };

    const handleScollLeft = () => {
        if (slideRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                slideRef.current,
                250,
                -movieRef.current.clientWidth * 2,
                slideRef.current.scrollLeft,
            );
        }
        setScrollLeft(slideRef.current.scrollLeft);
    };

    const onDragStart = (e) => {
        // console.log('start:', e.screenX);
        setIsDrag(true);
        setDragDown(e.screenX);
    };

    const onDragEnd = (e) => {
        // console.log(e.screenX);
        setIsDrag(false);
    };

    const onDragEnter = (e) => {
        // console.log('enter:', e.screenX);
        setDragMove(e.screenX);
    };

    const handleMouseOverMovie = (movie) => {
        dispatch(setMovieDetail(movie));
    };

    // const handleMouseOutMovie = () => {
    //     dispatch(setMovieDetail(null));
    // };
    return (
        // {isIntro ? }

        <div className={contentRowClassname} draggable="false">
            <h1 className={cx('title-row')}>{title}</h1>
            {/* <Link to={'/watch/:id'}> */}
            <div
                style={
                    movies && movies.length > 0
                        ? {
                              gridTemplateColumns: `repeat(${movies.length}, ${
                                  windowDimensions.width > 1400
                                      ? '230px'
                                      : windowDimensions.width > 1200
                                      ? '280px'
                                      : windowDimensions.width > 992
                                      ? '250px'
                                      : windowDimensions.width > 768
                                      ? '200px'
                                      : '150px'
                              })`,
                          }
                        : {}
                }
                className={cx('slide-row')}
                ref={slideRef}
                draggable="true"
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
            >
                {movies &&
                    movies.length > 0 &&
                    movies.map((movie, index) => {
                        // if (movie.poster_path) {
                        let urlImg = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                        return (
                            <div
                                key={index}
                                className={cx('movie-item')}
                                ref={movieRef}
                                draggable="false"
                                onClick={() => handleMouseOverMovie(movie)}
                                // onMouseOut={handleMouseOutMovie}
                            >
                                <Image className={cx('movie-img')} src={urlImg} draggable={'true'} />
                                {/* <div className={cx('movie-name')}>Tên phim</div> */}
                            </div>
                        );
                        // }
                        // return <div></div>;
                    })}
            </div>
            {/* </Link> */}
            <div className={iconLeftClassname} onClick={handleScollLeft}>
                <FiChevronLeft />
            </div>
            <div className={cx('icon-right')} onClick={handleScollRight}>
                <FiChevronRight />
            </div>
        </div>
    );
}

export default MoviesRow;
