import React from 'react';
import { connect } from 'react-redux';

const CharacterMovies = ({ movies, errors }) =>
  <div id='character-movies' className='col-md-6'>
    <h1>Movies</h1>
    {!errors ? (
      <ul className='movies-list'>
        {movies.map(movie => {
          const dateArray = movie.release_date.split('-');

          return <li key={movie.title}>{movie.title} ({dateArray[0]})</li>;
        })}
      </ul>
    ) : (
      <div className='error-message'>
        {errors}
      </div>
    )}
  </div>;

const mapStateToProps = ({ character: { movies, errors } }) => ({
  movies,
  errors
});

export default connect(mapStateToProps)(CharacterMovies);
