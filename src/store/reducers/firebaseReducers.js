import {
  CREATE_POKEMON_FIREBASE,
  DELETE_POKEMON_FIREBASE,
  LOAD_POKEMON_FIREBASE,
  UPDATE_POKEMON_FIREBASE
} from '../actionTypes';
const initalState = {
  pokemon: []
};

const firebaseReducers = (state = initalState, action) => {
  const { payload } = action;
  switch (action.type) {
    case LOAD_POKEMON_FIREBASE:
      return { ...state, pokemon: payload };
    case CREATE_POKEMON_FIREBASE:
      return { ...state, pokemon: [...state.pokemon, payload] };
    case UPDATE_POKEMON_FIREBASE:
      return {
        ...state,
        pokemon: state.pokemon.map(pokemon => {
          if (pokemon.id === payload.id) {
            return payload;
          }
          return pokemon;
        })
      };
    case DELETE_POKEMON_FIREBASE:
      return {
        ...state,
        pokemon: state.pokemon.filter(pokemon => pokemon.id !== payload)
      };
    default:
      return state;
  }
};

export default firebaseReducers;
