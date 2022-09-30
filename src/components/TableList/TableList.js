import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Pagination, Stack, Typography } from '@mui/material';

const TableList = ({
  pokemon,
  setOpen,
  downloadExcel,
  startDeletingPokemon
}) => {
  const firstIndex = 0;
  const pageSize = 4;
  const [pokemonData, setPokemonData] = useState(pokemon);

  const [page, setPage] = useState(1);
  const [data, setData] = useState(pokemonData.slice(firstIndex, pageSize));

  useEffect(() => {
    setPokemonData(pokemon);
  }, [pokemon]);

  useEffect(() => {
    setData(pokemonData.slice(firstIndex, pageSize));
  }, [pokemonData]);

  useEffect(() => {
    setData(pokemonData.slice(0, pageSize));
  }, [pageSize]);

  const handleChange = (event, value) => {
    setPage(value);
    setData(
      pokemon.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };

  return (
    <div className="animate__animated animate__backInLeft">
      <Stack direction="row" spacing={2} justifyContent="end" mb={2} mt={2}>
        <Button variant="contained" onClick={() => downloadExcel()}>
          <Typography variant="caption" display="block">
            Exportar Excel
          </Typography>
        </Button>
        <Button variant="contained" onClick={() => setOpen(true)}>
          <Typography variant="caption" display="block">
            Agregar Pokemon
          </Typography>
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pokemones</TableCell>
              <TableCell align="center">Experiencia</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((pokemon, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {pokemon.name}
                </TableCell>
                <TableCell align="center">{pokemon.experiencia}</TableCell>
                <TableCell align="center">{pokemon.status}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2} justifyContent="end">
                    <Button
                      variant="contained"
                      onClick={() => startDeletingPokemon(pokemon.id)}
                    >
                      <Typography variant="caption" display="block">
                        Eliminar
                      </Typography>
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: '20px' }}>
        <Pagination
          count={Math.ceil(pokemon.length / pageSize)}
          page={page}
          onChange={handleChange}
          color="primary"
          className="pagination"
        />
      </div>
    </div>
  );
};

export default TableList;
