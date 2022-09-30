import {
  CREATE_POKEMON_FIREBASE,
  LOAD_POKEMON_FIREBASE
} from '../../actionTypes';
import firebaseReducers from '../firebaseReducers';
import { pokemonFirebase } from './mockData';

const initialState = {
  pokemon: []
};

describe('pruebas en Firebase Reducers', () => {
  test('Debe de devolver el estado inicial', () => {
    const action = { type: undefined };
    const state = firebaseReducers(initialState, action);

    expect(state.pokemon).toStrictEqual([]);
  });

  test('debe de traer los datos de firebase', () => {
    const action = { type: LOAD_POKEMON_FIREBASE, payload: pokemonFirebase };
    const state = firebaseReducers(initialState, action);

    expect(state.pokemon).toStrictEqual(pokemonFirebase);
  });

  test('debe de crear un pokemon para firebase', () => {
    const newPokemon = {
      name: 'Charmander V2',
      experiencia: '100',
      status: 'register'
    };
    const action = { type: CREATE_POKEMON_FIREBASE, payload: newPokemon };
    const stateBeforeAction = firebaseReducers(initialState, {
      type: undefined,
      payload: pokemonFirebase
    });
    const stateAfterAction = firebaseReducers(initialState, action);
    expect(stateBeforeAction.pokemon).toStrictEqual([]);
    expect(stateAfterAction.pokemon).toStrictEqual([newPokemon]);
  });
});
