import { TextField } from '@mui/material';
import React from 'react';

const SearchBar = ({ setVal }) => {
  return (
    <div className="animate__animated animate__bounceIn ">
      <TextField
        id="outlined-basic"
        fullWidth
        label="Buscar Pokemon"
        variant="outlined"
        onChange={({ currentTarget }) => {
          setVal(currentTarget.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
