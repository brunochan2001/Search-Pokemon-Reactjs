import { TextField } from '@mui/material';
import React from 'react';

const SearchBar = ({ setVal }) => {
  return (
    <TextField
      id="outlined-basic"
      fullWidth
      label="Buscar Pokemon"
      variant="outlined"
      onChange={({ currentTarget }) => {
        setVal(currentTarget.value);
      }}
    />
  );
};

export default SearchBar;
