import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
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
      <TabBar tab={tab} handleChange={handleTabChange} />
      <TabPanel value={tab} index={0}>
        <FormControl className={classes.formControl}>
          <Select
            value={goal}
            onChange={handleGoalChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="Comprar um celular">Comprar um celular</MenuItem>
            <MenuItem value="Fazer uma viagem">Fazer uma viagem</MenuItem>
            <MenuItem value="Comprar carro ou moto">Comprar carro ou moro</MenuItem>
            <MenuItem value="Outro">Outro</MenuItem>
          </Select>
        </FormControl>
        <Box display="flex" style={{ backgroundColor: 'red' }} />
        <Box style={{ backgroundColor: 'green' }} />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Typography>Qual a frequência para guardar?</Typography>
      </TabPanel>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default Main;
