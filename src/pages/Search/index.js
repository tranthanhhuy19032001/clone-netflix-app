import SearchMovies from '../../components/SearchMovies';
import MoviesDetail from '../../components/MoviesDetail';
import { useSelector } from 'react-redux';

function Search() {
    const { MovieDetail } = useSelector((state) => state.infoMovies);
    return (
        <div>
            <SearchMovies />
            <MoviesDetail movie={MovieDetail} showModal={MovieDetail ? true : false} />
        </div>
    );
}

export default Search;
