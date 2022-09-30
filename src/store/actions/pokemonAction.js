import {
  CLEAR_MSG_ERROR,
  GET_POKEMON_FAIL,
  GET_POKEMON_LOADING,
  GET_POKEMON_SUCCESS,
  LOAD_POKEMON_FIREBASE
} from '../actionTypes';

export const onPokemonLoading = () => {
  return async dispatch => {
    dispatch({ type: GET_POKEMON_LOADING });
  };
};

export const onPokemonSuccess = data => {
  return async dispatch => {
    dispatch({ type: GET_POKEMON_SUCCESS, payload: data });
  };
};

export const onPokemonFail = data => {
  return async dispatch => {
    dispatch({ type: GET_POKEMON_FAIL, payload: data });
  };
};

export const onClearMsg = () => {
  return async dispatch => {
    dispatch({ type: CLEAR_MSG_ERROR });
  };
};

export const onSetPokemon = data => {
  return async dispatch => {
    dispatch({ type: LOAD_POKEMON_FIREBASE, payload: data });
  };
};
