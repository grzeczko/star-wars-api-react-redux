import { API_URL } from '../../constants';
import characters from '../data/characters.json';

export const SET_CHARACTERS = 'SET_CHARACTERS';

export function getCharacters() {
  return dispatch => {
    dispatch(setCharacters(characters.characters))
  }
}

export function setCharacters(characters) {
  return {
    type: SET_CHARACTERS,
    characters,
  };
}
