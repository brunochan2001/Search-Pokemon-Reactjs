import {
  GET_POKEMON_FAIL,
  GET_POKEMON_LOADING,
  GET_POKEMON_SUCCESS
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

export const onPokemonFail = () => {
  return async dispatch => {
    dispatch({ type: GET_POKEMON_FAIL });
  };
};
