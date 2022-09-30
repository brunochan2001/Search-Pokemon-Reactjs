import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack, Typography } from '@mui/material';

const TableList = ({
  pokemon,
  setOpen,
  downloadExcel,
  startDeletingPokemon
}) => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="end" mb={2}>
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
            {pokemon.map((pokemon, index) => (
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
                    <Button
                      variant="contained"
                      onClick={() => console.log(pokemon.id)}
                    >
                      <Typography variant="caption" display="block">
                        PDF
                      </Typography>
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableList;
