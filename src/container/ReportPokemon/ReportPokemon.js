import React, { useEffect, useState } from 'react';
import { CustomModal, SearchBar, TableList } from '../../components';
import useFirebaseStore from '../../hooks/useFirebaseStore';
import * as XLSX from 'xlsx';

const ReportPokemon = () => {
  const { pokemon, startLoadPokemon, startDeletingPokemon, startNewPokemon } =
    useFirebaseStore();
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState('');
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    startLoadPokemon();
  }, []);

  useEffect(() => {
    filterData(val);
  }, [val, pokemon]);

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

  const filterData = value => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setDataFilter(pokemon);
    } else {
      const filteredData = pokemon.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toString().toLowerCase().includes(lowerCaseValue)
        );
      });
      setDataFilter(filteredData);
    }
  };

  return (
    <>
      <SearchBar setVal={setVal} />
      <TableList
        pokemon={dataFilter}
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
