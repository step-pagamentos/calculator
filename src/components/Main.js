import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Select from './Select';
import TabBar from './TabBar';
import TabPanel from './TabPanel';

const Main = () => {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [goal, setGoal] = useState('Comprar um celular');

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleGoalChange = (event, newValue) => {
    setGoal(newValue);
  };

  return (
    <div className={classes.root}>
      <Box p={3}>
        <Typography color="primary" variant="h5" className={classes.heading}>Simule e planeje seus objetivos:</Typography>
      </Box>
      <TabBar tab={tab} handleChange={handleTabChange} />
      <TabPanel className={classes.panel} value={tab} index={0}>
        <Box pt={3}>
          <FormControl className={classes.formControl} variant="filled" fullWidth={true}>
            <Select
              value={goal}
              onChange={handleGoalChange}
              displayEmpty
              classes={{ icon: classes.icon }}
              inputProps={{ 'aria-label': 'Without label' }}
              IconComponent={ExpandMore}
            >
              <MenuItem className={classes.menuItem} value="Comprar um celular">Comprar um celular</MenuItem>
              <MenuItem value="Fazer uma viagem">Fazer uma viagem</MenuItem>
              <MenuItem value="Comprar carro ou moto">Comprar carro ou moro</MenuItem>
              <MenuItem value="Outro">Outro</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Typography>Qual a frequência para guardar?</Typography>
      </TabPanel>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    fontWeight: 600,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: theme.palette.primary.main,
    paddingRight: 40,
  },
}));

export default Main;
