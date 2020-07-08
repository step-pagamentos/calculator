import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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
      <Grid container>
        <Grid item md={6} xs={12}>
          <Main />
        </Grid>
        <Grid item md={6} xs={12}>
          <img style={{ width: 600 }} src="https://i.insider.com/5c54bdf6d7ab6720e673830e?width=1300&format=jpeg&auto=webp" />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
