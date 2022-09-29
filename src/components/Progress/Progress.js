import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Progress = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh'
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Progress;
