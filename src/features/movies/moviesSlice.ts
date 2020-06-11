import produce from 'immer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from './types';

interface MoviesState {
  errors: {
    fetching: [];
    saving: [];
  };
  status: {
    isLoading: boolean;
    isSaving: boolean;
  };
  hasErrors: boolean;
  movies: Movie[];
}

const initialState: MoviesState = {
  errors: {
    fetching: [],
    saving: [],
  },
  status: {
    isLoading: false,
    isSaving: false,
  },
  hasErrors: false,
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesInit(state) {
      return produce(state, (draft) => {
        //draft.errors.fetching = [];
        draft.status.isLoading = true;
        draft.hasErrors = false;
        draft.movies = [];
      });
    },
    fetchMoviesSuccess(state, action: PayloadAction<Movie[]>) {
      return produce(state, (draft) => {
        draft.status.isLoading = false;
        draft.hasErrors = false;
        draft.movies = action.payload;
      });
    },
    fetchMoviesFailure(state) {
      return produce(state, (draft) => {
        draft.status.isLoading = false;
        draft.hasErrors = true;
        draft.movies = [];
      });
    },
  },
});

export const {
  fetchMoviesInit,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} = moviesSlice.actions;
export default moviesSlice.reducer;
