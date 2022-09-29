import React from 'react';
import { PokemonSearch } from '../container';
import { DefaultLayout } from '../layout';

const SearchPage = () => {
  return (
    <DefaultLayout>
      <PokemonSearch></PokemonSearch>
    </DefaultLayout>
  );
};

export default SearchPage;
