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
