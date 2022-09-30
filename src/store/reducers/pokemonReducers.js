import {
  CLEAR_MSG_ERROR,
  GET_POKEMON_FAIL,
  GET_POKEMON_LOADING,
  GET_POKEMON_SUCCESS
} from '../actionTypes';

const initalState = {
  isLoading: false,
  pokemon: [],
  msg: ''
};

const pokemonReducers = (state = initalState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_POKEMON_LOADING:
      return { ...state, isLoading: true, pokemon: [] };

    case GET_POKEMON_SUCCESS:
      return { ...state, isLoading: false, pokemon: payload };
    case GET_POKEMON_FAIL:
      return {
        ...state,
        isLoading: false,
        pokemon: [],
        msg: payload
      };
    case CLEAR_MSG_ERROR:
      return {
        ...state,
        msg: ''
      };

    default:
      return state;
  }
};

export default pokemonReducers;
