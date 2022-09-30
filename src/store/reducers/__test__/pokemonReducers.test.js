import {
  CLEAR_MSG_ERROR,
  GET_POKEMON_FAIL,
  GET_POKEMON_LOADING,
  GET_POKEMON_SUCCESS
} from '../../actionTypes';
import pokemonReducers from '../pokemonReducers';
import { pokemon } from './mockData';

const initialState = {
  isLoading: false,
  pokemon: [],
  msg: ''
};

describe('Pruebas en Pokemon Reducers', () => {
  test('debe de regresar el estado inicial    ', () => {
    const action = { type: undefined };
    const state = pokemonReducers(initialState, action);

    expect(state.isLoading).toBe(false);
    expect(state.pokemon).toStrictEqual([]);
    expect(state.msg).toBe('');
  });

  test('debe hacer el loading de la peticion', () => {
    const action = { type: GET_POKEMON_LOADING };
    const stateBeforeAction = pokemonReducers(initialState, {
      type: undefined
    });
    const stateAfterAction = pokemonReducers(initialState, action);

    expect(stateBeforeAction.isLoading).toBe(false);
    expect(stateAfterAction.isLoading).toBe(true);
  });

  test('debe de mostrar un pokemon', () => {
    const action = { type: GET_POKEMON_SUCCESS, payload: pokemon };
    const stateBeforeAction = pokemonReducers(initialState, {
      type: GET_POKEMON_LOADING
    });
    const stateAfterAction = pokemonReducers(initialState, action);

    expect(stateBeforeAction.pokemon).toStrictEqual([]);
    expect(stateAfterAction.pokemon).toStrictEqual(pokemon);
  });

  test('debe de mostrar un error de la peticion', () => {
    const msgError = 'No se pudo encontrar';
    const action = { type: GET_POKEMON_FAIL, payload: msgError };
    const stateBeforeAction = pokemonReducers(initialState, {
      type: GET_POKEMON_LOADING
    });
    const stateAfterAction = pokemonReducers(initialState, action);

    expect(stateBeforeAction.msg).toBe('');
    expect(stateAfterAction.msg).toBe(msgError);
  });

  test('debe de limpiar el mensaje de error', () => {
    const msgError = 'No se pudo encontrar';
    const action = { type: CLEAR_MSG_ERROR };
    const stateBeforeAction = pokemonReducers(initialState, {
      type: GET_POKEMON_FAIL,
      payload: msgError
    });
    const stateAfterAction = pokemonReducers(initialState, action);

    expect(stateBeforeAction.msg).toBe(msgError);
    expect(stateAfterAction.msg).toBe('');
  });
});
