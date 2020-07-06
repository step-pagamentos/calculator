import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from './Tab';

const a11yProps = index => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const TabBar = ({ tab, handleChange }) => {
  const classes = useStyles();
  return (
    <Box borderBottom={1} className={classes.container}>
      <AppBar elevation={0} className={classes.appBar} position="static">
        <Tabs variant="fullWidth" indicatorColor="primary" value={tab} onChange={handleChange} aria-label="simple tabs example">
          <Tab disableRipple label="Tenho objetivo" {...a11yProps(0)} />
          <Tab disableRipple label="Só guardar" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white',
  },
  container: {
    borderColor: theme.palette.primary.main,
  },
}));

export default TabBar;
