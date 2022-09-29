import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './lib/theme';
import { PokemonPage, ReportPage, SearchPage } from './Pages';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route exact path="/" element={<SearchPage />} />
            <Route exact path="/Reportes" element={<ReportPage />} />
            <Route exact path="/pokemon/:pokemonId" element={<PokemonPage />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
