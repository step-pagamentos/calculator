import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Main from './components/Main';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1BD760',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h5: {
      fontSize: 24,
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 600,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
