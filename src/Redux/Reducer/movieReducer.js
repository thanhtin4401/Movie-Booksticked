import { SET_MOVIE_LIST } from "../constants/movieConstant"

const initialState = {
    movieList : []
}

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MOVIE_LIST : {
        state.movieList = payload
        return {...state}
    }
  default:
    return state
  }
}
