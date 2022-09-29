import React from 'react';
import { PokemonSingle } from '../container';
import { DefaultLayout } from '../layout';

const PokemonPage = () => {
  return (
    <DefaultLayout>
      <PokemonSingle />
    </DefaultLayout>
  );
};

export default PokemonPage;
