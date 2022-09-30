import React, { useEffect, useState } from 'react';
import { CustomModal, TableList } from '../../components';
import useFirebaseStore from '../../hooks/useFirebaseStore';
import * as XLSX from 'xlsx';

const ReportPokemon = () => {
  const { startLoadPokemon, pokemon, startDeletingPokemon, startNewPokemon } =
    useFirebaseStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    startLoadPokemon();
  }, []);

  const downloadExcel = () => {
    const newData = pokemon.map(note => {
      delete note.tableData;
      return note;
    });
    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'pokemon');
    XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' });
    XLSX.writeFile(workBook, 'PokemonData.xlsx');
  };

  return (
    <>
      <TableList
        pokemon={pokemon}
        downloadExcel={downloadExcel}
        open={open}
        setOpen={setOpen}
        startDeletingPokemon={startDeletingPokemon}
      />
      <CustomModal
        open={open}
        setOpen={setOpen}
        startNewPokemon={startNewPokemon}
      />
    </>
  );
};

export default ReportPokemon;
