import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentCharacter,
  getCharacterProfile,
} from '../../redux/character/actions';

const CharacterList = ({ characters, setCharacter }) =>
  <div id='character-list' className='col-md-6'>
    <h1>Characters</h1>
    <ul>
      {characters.map((c) =>
        <li
          onClick={setCharacter(c.url)}
          key={c.name}
        >
          {c.name}
        </li>
      )}
    </ul>
  </div>;

const mapStateToProps = ({ characters }) => ({
  characters,
});

const mapDispatchToProps = dispatch => ({
  setCharacter(url) {
    return () => {
      dispatch(setCurrentCharacter(url));
      dispatch(getCharacterProfile(url));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
