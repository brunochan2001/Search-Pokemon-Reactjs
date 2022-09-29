import React from 'react';
import { SinglePokemonCard } from '../../components';

import { usePokemonStore } from '../../hooks/usePokemonStore';

const PokemonSingle = () => {
  const { pokemon } = usePokemonStore();

  return <SinglePokemonCard pokemon={pokemon} />;
};

export default PokemonSingle;
