import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  onClearMsg,
  onPokemonFail,
  onPokemonLoading,
  onPokemonSuccess
} from '../store/actions';
import { getPokemon } from '../store/endpoint';

export const usePokemonStore = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemon, msg } = useSelector(state => state.pokemon);

  const startSearchPokemon = async value => {
    dispatch(onPokemonLoading());
    dispatch(onClearMsg());

    if (!value) {
      return dispatch(onPokemonFail());
    }

    try {
      const response = await axios(getPokemon(`${value}`));
      const { data } = response;
      const { name, base_experience, abilities, sprites } = data;
      const { other } = sprites;
      const { dream_world } = other;

      const pokemon = {
        name,
        base_experience,
        abilities,
        image: dream_world.front_default
      };
      dispatch(onPokemonSuccess(pokemon));
    } catch (error) {
      dispatch(onPokemonFail('Pokemon no existe'));
    }
  };

  return {
    // Propiedades
    isLoading,
    pokemon,
    msg,
    // Metodos
    startSearchPokemon
  };
};
