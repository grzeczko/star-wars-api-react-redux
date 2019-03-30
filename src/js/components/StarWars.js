import React from 'react';
import CharacterList from './CharacterList';
import CharacterMovies from './CharacterMovies';

const StarWars = () =>
  <div className='container'>
    <div className='row'>
      <CharacterList />
      <CharacterMovies />
    </div>
  </div>;

export default StarWars;
