import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from './app/store';
import Movies from './features/movies/Movies';
import { Movie } from './features/movies/types';
import { fetchMovies } from './features/movies/actions';

interface Props {
  movies: Movie[];
  fetchMovies: () => Movie[];
}

export class App extends Component<Props> {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return (
      <div>
        <h1>My Movies App</h1>

        <Movies movies={this.props.movies} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.movies,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
