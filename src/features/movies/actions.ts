import axios from 'axios';
import { AppThunk, AppDispatch } from '../../app/store';
import {
  fetchMoviesInit,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from './moviesSlice';

export const fetchMovies = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(fetchMoviesInit());

  axios
    .get('http://localhost:3000/movies')
    .then((response) => {
      dispatch(fetchMoviesSuccess(response.data));
    })
    .catch((_error) => {
      dispatch(fetchMoviesFailure());
    });
};
