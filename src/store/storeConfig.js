import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import firebaseReducers from './reducers/firebaseReducers';
import pokemonReducers from './reducers/pokemonReducers';

const reducer = combineReducers({
  pokemon: pokemonReducers,
  firebase: firebaseReducers
});

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => '');
export default store;
