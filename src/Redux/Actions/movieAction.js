import { movieService } from "../../Services/movie.service";
import { SET_MOVIE_LIST } from "../constants/movieConstant";

export const getMovieListActionService = () => {
  return (dispatch) => {
    movieService
      .getMovieList()
      .then((res) => {
         dispatch({
            type:SET_MOVIE_LIST,
            payload: res.data.content
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
