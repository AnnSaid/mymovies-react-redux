import {MOVIE_SEARCH, GET_MOVIES, GET_MOVIE, SSTATE} from '../actions/types'

const initialState = {
    searchKeyword: '',
    searchResult: [],
    searchState: false,
    movieInfo: []

}

export default function (state = initialState, action ){
    switch(action.type){
        case MOVIE_SEARCH:
            return {
                ...state,
                searchKeyword: action.payload,
                searchState: false
            };
        case GET_MOVIES:
            return {
                ...state,
                searchResult: action.payload,
                searchState: false
            };
        case GET_MOVIE:
                return {
                  ...state,
                  movieInfo: action.payload,
                  searchState: false
                };
        case SSTATE:
                return {
                  ...state,
                  searchState: true
                };
        default:
            return state
    }
}