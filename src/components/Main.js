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
  const [goalTab, setGoalTab] = useState(0);
  const [timeTab, setTimeTab] = useState(0);
  const [goal, setGoal] = useState('Comprar um celular');
  const [price, setPrice] = useState(100);
  const [time, setTime] = useState(1);

  const handleGoalTabChange = (event, newValue) => {
    setGoalTab(newValue);
  };

  const handleTimeTabChange = (event, newValue) => {
    setTimeTab(newValue);
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleTimeChange = (event, newValue) => {
    setTime(newValue);
  };

  const monthlyDeposit = () => {
    return price / ((Math.pow(1.01856, time)-1)/0.01856);
  };

  return (
    <Container maxWidth={false}>
      <Box p={3} textAlign="center">
        <Typography color="primary" variant="h5">Simule e planeje seus objetivos:</Typography>
      </Box>
      <TabBar borderColor="primary" labels={['Tenho objetivo', 'Só guardar']} tab={goalTab} handleChange={handleGoalTabChange} variant="fullWidth" />
      <TabPanel value={goalTab} index={0}>
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
              <MenuItem value="Comprar um celular">Comprar um celular</MenuItem>
              <MenuItem value="Fazer uma viagem">Fazer uma viagem</MenuItem>
              <MenuItem value="Comprar carro ou moto">Comprar carro ou moto</MenuItem>
              <MenuItem value="Outro">Outro</MenuItem>
            </Select>
          </FormControl>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box textAlign="center" mt={3}>
                <Typography color="primary" variant="subtitle2">Quanto custa?</Typography>
              </Box>
              <Slider onChange={handlePriceChange} min={100} max={1000000} step={100} type="currency" value={price} />
            </Grid>
            <Grid item md={6} xs={12}>
              <Box textAlign="center" mt={3}>
                <Typography color="primary" variant="subtitle2">Quanto tempo?</Typography>
              </Box>
              <Slider onChange={handleTimeChange} min={1} max={60} type="time" value={time} />
            </Grid>
          </Grid>
          <Box mt={3} mb={3}>
              <Typography variant="h5">
                Você precisa guardar {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monthlyDeposit())} por mês
              </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={goalTab} index={1}>
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
