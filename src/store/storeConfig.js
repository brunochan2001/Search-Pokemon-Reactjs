import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import pokemonReducers from './reducers/pokemonReducers';

const reducer = combineReducers({ pokemon: pokemonReducers });

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => '');
export default store;
