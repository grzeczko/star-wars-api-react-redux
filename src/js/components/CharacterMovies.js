import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const CharacterMovies = ({ movies, errors }) =>
  <div id='character-movies' className='col-md-6'>
    <h1>Movies</h1>
    {!errors ? (
      <ul className='movies-list'>
        {movies.map(movie => {
          return <li key={movie.title}>{movie.title} (<Moment date={movie.release_date} format="dddd, LL" />)</li>;
        })}
      </ul>
    ) : (
      <div className='error-message alert alert-danger'>
        {errors}
      </div>
    )}
  </div>;

const mapStateToProps = ({ character: { movies, errors } }) => ({
  movies,
  errors
});

export default connect(mapStateToProps)(CharacterMovies);
