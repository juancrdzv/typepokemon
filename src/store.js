import { createStore } from 'redux';
import playerReducer from './reducers/player';
import gameManagerReducer from './reducers/gameManager';
import pokemonDataReducer from './reducers/pokemonData';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import pokemonData from './data/data';

const reducers = combineReducers({
  player: playerReducer,
  gameManager: gameManagerReducer,
  pokemonData: pokemonDataReducer,
});

const initialState = {
  player: {
    name: '',
    currentPokemon: {},
    points: 0,
    pashe: '',
    health: 100,
  },
  gameManager: { screen: 'name_screen' },
  pokemonData: pokemonData,
};
const store = createStore(reducers, initialState, composeWithDevTools());

export default store;
