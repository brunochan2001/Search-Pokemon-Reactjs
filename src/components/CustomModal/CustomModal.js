import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Stack, TextField, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
};

const initialForm = { name: '', experiencia: '' };

const CustomModal = ({ open, setOpen, startNewPokemon }) => {
  const [form, setForm] = useState(initialForm);

  const onChangeInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onResetForm = () => {
    setForm(initialForm);
  };

  const onSubmit = e => {
    e.preventDefault();
    startNewPokemon(form);
    setOpen(false);
    setForm(initialForm);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} onSubmit={e => onSubmit(e)}>
          <Typography variant="h6" textAlign="center" gutterBottom>
            Pokemon
          </Typography>
          <form>
            <Stack spacing={2}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Nombre"
                variant="outlined"
                name="name"
                value={form.name}
                onChange={e => onChangeInput(e)}
              />
              <TextField
                fullWidth
                id="standard-basic"
                label="Experiencia"
                variant="outlined"
                name="experiencia"
                value={form.experiencia}
                onChange={e => onChangeInput(e)}
              />
            </Stack>
            <Stack spacing={2} direction="row" justifyContent="center" mt={2}>
              <Button variant="contained" type="submit">
                Aceptar
              </Button>
              <Button variant="contained" onClick={() => onResetForm()}>
                Vaciar
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
