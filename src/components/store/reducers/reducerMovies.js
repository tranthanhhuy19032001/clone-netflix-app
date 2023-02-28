import * as Types from '../types';
const reducerMoviesInitialState = {
    DiscoverMovies: null,
    TVMovies: null,
    TrendingMovies: null,
    MovieDetail: null,
    SearchMovies: null,
};
const reducerMovies = (state = reducerMoviesInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case Types.GET_DISCOVER_MOVIES:
            return { ...state, DiscoverMovies: payload };
        case Types.GET_TV_MOVIES:
            return { ...state, TVMovies: payload };
        case Types.GET_TRENDING_MOVIES:
            return { ...state, TrendingMovies: payload };
        case Types.GET_MOVIE_DETAIL:
            return { ...state, MovieDetail: payload };
        case Types.GET_SEARCH_MOVIES:
            return { ...state, SearchMovies: payload };
        default:
            return state;
    }
};

export default reducerMovies;
