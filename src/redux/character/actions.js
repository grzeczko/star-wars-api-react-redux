import { API_URL } from '../../constants';

export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';
export const SET_CHARACTER_MOVIES = 'SET_CHARACTER_MOVIES';
export const FETCH_RESOURCES_FAIL = 'FETCH_RESOURCES_FAIL';
export const FETCH_RESOURCES_SUCCESS = 'FETCH_RESOURCES_SUCCESS';

export function setCurrentCharacter(url) {
  return {
    type: SET_CURRENT_CHARACTER,
    url,
  };
}

export function setCharacterProfile(profile) {
  return {
    type: SET_CHARACTER_PROFILE,
    profile,
  };
}

export function getCharacterProfile(url) {
  return dispatch =>
    fetch(`${url}`)
      .then(res => res.json())
      .then(profile => {
        dispatch(setCharacterProfile(profile));
        dispatch(getCharacterMovies(profile.films));
      })
      .catch(err => {
        dispatch(fetchError(FETCH_RESOURCES_FAIL));
      });
}

export function setCharacterMovies(movies) {
  return {
    type: SET_CHARACTER_MOVIES,
    movies,
  };
}

export function getCharacterMovies(moviesUrls) {

  return dispatch =>
    Promise.all(moviesUrls.map(movieUrl =>
      fetch(movieUrl)
        .then(res => res.json())
    ))
    .then(movies => {
      dispatch(fetchError(FETCH_RESOURCES_SUCCESS));
      dispatch(setCharacterMovies(movies))
    });
}

export function fetchError(type) {
  return {
    type: type
  };
}
