import { TextField } from '@mui/material';
import React from 'react';

const SearchBar = () => {
  return (
    <TextField
      id="outlined-basic"
      fullWidth
      label="Buscar Pokemon"
      variant="outlined"
    />
  );
};

export default SearchBar;
