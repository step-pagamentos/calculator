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

const TabBar = ({ borderColor, labels, tab, handleChange, variant }) => {
  const classes = useStyles();
  return (
    <Box borderBottom={1} className={borderColor === 'primary' ? classes.container : classes.noBorder}>
      <AppBar elevation={0} className={classes.appBar} position="static">
        <Tabs variant={variant} indicatorColor="primary" value={tab} onChange={handleChange} aria-label="simple tabs example">
          <Tab disableRipple label={labels[0]} {...a11yProps(0)} />
          <Tab disableRipple label={labels[1]} {...a11yProps(1)} />
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
  noBorder: {
    borderColor: 'transparent',
  },
}));

export default TabBar;
