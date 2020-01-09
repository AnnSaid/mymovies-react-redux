import {MOVIE_SEARCH, GET_MOVIES, GET_MOVIE, SSTATE} from './types'
import axios from 'axios'
import {APIKey} from '../APIKey'

export const searchMovieAction = searchKeyword => dispatch => {
    dispatch({
        type: MOVIE_SEARCH,
        payload: searchKeyword
    })
};

export const getMoviesAction = searchKeyword => dispatch => {
   axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${searchKeyword}`)
    .then(response => dispatch({
        type: GET_MOVIES,
        payload: response.data //api object data
    }))
    .catch(err => console.log(err))
};

export const getMovieDetails = id => dispatch => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
      .then(response =>
        dispatch({
          type: GET_MOVIE,
          payload: response.data
        })
      )
      .catch(err => console.log(err));
  };

export const setSearchState = () => {
    return {
      type: SSTATE
    };
  };