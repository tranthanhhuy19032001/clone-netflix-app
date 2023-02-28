import axios from 'axios';
import * as Types from '../types';

const API_KEY = '17c603b24626dc4dc58e4c0a66228297';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getDiscoverMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}`);
        dispatch({ type: Types.GET_DISCOVER_MOVIES, payload: result.data.results });
    } catch (error) {
        console.log('GET DISCOVER MOVIES API ERROR: ', error);
    }
};

export const getTVMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}`);
        dispatch({ type: Types.GET_TV_MOVIES, payload: result.data.results });
    } catch (error) {
        console.log('GET TV MOVIES API ERROR: ', error);
    }
};

export const getTrendingMovies = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`);
        dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results });
    } catch (error) {
        console.log('GET TRENDING MOVIES API ERROR: ', error);
    }
};

export const setMovieDetail = (movie) => async (dispatch) => {
    dispatch({ type: Types.GET_MOVIE_DETAIL, payload: movie });
};

export const getSearchMovies = (keyword) => async (dispatch) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keyword}`,
        );
        dispatch({
            type: Types.GET_SEARCH_MOVIES,
            payload: result.data.results,
        });
    } catch (error) {
        console.log('GET SEARCH MOVIES ERROR: ', error);
    }
};
