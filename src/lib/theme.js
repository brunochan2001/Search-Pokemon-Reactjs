// import { createMuiTheme, responsiveFontSizes } from '@materia';

import { createTheme, responsiveFontSizes } from '@mui/material';

const options = {
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      textTransform: 'none'
    }
  }
};

export const theme = responsiveFontSizes(createTheme(options));
