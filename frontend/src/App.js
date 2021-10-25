import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

import Routes from './Routes';

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
