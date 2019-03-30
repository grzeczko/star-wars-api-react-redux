import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './redux';
import { getCharacters } from './redux/characters/actions';

import StarWars from './js/components/StarWars'

// Create redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk),
));

// Get all characters
store.dispatch(getCharacters());
console.log(store.getState().characters);

// Create app
const container = document.querySelector('#app');

// Render app
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <StarWars />
    </Provider>
  </AppContainer>
  , container
);

module.hot.accept();
