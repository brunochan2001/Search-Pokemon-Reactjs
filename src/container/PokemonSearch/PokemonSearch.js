import React, { useEffect, useState } from 'react';
import { useDebounce } from 'react-use';
import { usePokemonStore } from '../../hooks/usePokemonStore';
import { PokemonCard, Progress, SearchBar } from '../../components';
import { Alert, Stack } from '@mui/material';

const PokemonSearch = () => {
  const { startSearchPokemon, pokemon, isLoading, msg } = usePokemonStore();
  const [val, setVal] = useState('');

  useEffect(() => {
    if (!val) {
      startSearchPokemon(val);
    }
  }, [val]);

  useDebounce(
    () => {
      startSearchPokemon(val);
    },
    400,
    [val]
  );

  return (
    <>
      <SearchBar setVal={setVal} />
      {isLoading && <Progress />}
      {Object.keys(pokemon).length > 0 && <PokemonCard pokemon={pokemon} />}
      {msg && (
        <Stack pt={2}>
          <Alert severity="error">Pokemon no encontrado</Alert>
        </Stack>
      )}
    </>
  );
};

export default PokemonSearch;
