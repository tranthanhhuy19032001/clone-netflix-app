import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesRow from './MoviesRow';
import { getDiscoverMovies, getTVMovies, getTrendingMovies } from '../../components/store/actions';

function Content(props) {
    const dispatch = useDispatch();
    const { DiscoverMovies, TVMovies, TrendingMovies } = useSelector((state) => state.infoMovies);

    useEffect(() => {
        dispatch(getDiscoverMovies());
        dispatch(getTVMovies());
        dispatch(getTrendingMovies());
    }, [dispatch]);

    // console.log(TrendingMovies);
    return (
        <div>
            <MoviesRow movies={DiscoverMovies} title="Phát hành trong năm qua" />
            <MoviesRow movies={TVMovies} title="Top 10 chương trình truyền hình tại Việt Nam" />
            <MoviesRow movies={TrendingMovies} title="Hiện đang thịnh hành" />
            <MoviesRow movies={DiscoverMovies} title="Phim tình cảm châu á" />
        </div>
    );
}
export default Content;
