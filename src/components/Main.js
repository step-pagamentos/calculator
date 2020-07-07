import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Select from './Select';
import TabBar from './TabBar';
import TabPanel from './TabPanel';
import Slider from './Slider';

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
    <Container maxWidth={false}>
      <Box p={3} textAlign="center">
        <Typography color="primary" variant="h5">Simule e planeje seus objetivos:</Typography>
      </Box>
      <TabBar tab={tab} handleChange={handleTabChange} />
      <TabPanel className={classes.panel} value={tab} index={0}>
        <Box pt={3}>
          <FormControl className={classes.formControl} variant="filled" fullWidth={true}>
            <Select
              value={goal}
              onChange={handleGoalChange}
              displayEmpty
              classes={{ icon: classes.select.icon }}
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
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box textAlign="center" mt={3}>
              <Typography color="primary" variant="subtitle2">Quanto custa?</Typography>
            </Box>
            <Slider min={100} max={1000000} step={100} type="currency" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center" mt={3}>
              <Typography color="primary" variant="subtitle2">Quanto tempo?</Typography>
            </Box>
            <Slider min={1} max={60} type="time" />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Typography>Qual a frequência para guardar?</Typography>
      </TabPanel>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  select: {
    icon: {
      color: theme.palette.primary.main,
      paddingRight: 40,
    },
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default Main;
