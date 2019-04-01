import React from 'react';
import CharacterList from './CharacterList';
import CharacterMovies from './CharacterMovies';
import Chewbacca from './Chewbacca';

const StarWars = () =>
  <div className='container'>
    <div className='row'>
      <CharacterList />
      <CharacterMovies />
      <Chewbacca />
    </div>
  </div>;

export default StarWars;
