import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from './Slider';

const Main = () => {
  const [income, setIncome] = useState(1000);
  const [tax, setTax] = useState(10);
  const [time, setTime] = useState(12*30);

  const handleIncomeChange = (event, newValue) => {
    setIncome(newValue);
  };

  const handleTaxChange = (event, newValue) => {
    setTax(newValue);
  };

  const handleTimeChange = (event, newValue) => {
    setTime(newValue);
  };

  const futureValue = () => {
    return income*(tax/100) * [Math.pow((1+0.001856), time) - 1] / 0.001856;
  };

  return (
    <Container maxWidth={false}>
      <Box p={2}>
        <Typography color="primary" variant="h4">Simule e planeje seus objetivos:</Typography>
      </Box>
      <Box p={2}>
        <Typography color="primary" variant="subtitle2">Quanto você gasta por mês?</Typography>
      </Box>
      <Slider onChange={handleIncomeChange} min={500} max={50000} step={500} type="currency" value={income} defaultValue={1000} />
      <Box p={2}>
        <Typography color="primary" variant="subtitle2">Quanto gostaria de guardar por mês?</Typography>
      </Box>
      <Slider onChange={handleTaxChange} min={1} max={10} step={1} type="tax" value={tax} defaultValue={10} />
      <Box mt={3} p={2}>
        <Typography color="primary" variant="subtitle2">Por quanto tempo?</Typography>
      </Box>
      <Slider defaultValue={30*12} onChange={handleTimeChange} min={1} max={12*30} type="time" value={time} />
      <Box ml={2} mt={3} mb={2}>
        <Typography variant="h4">
          Você terá
          <Typography variant="span" color="primary">
            {` ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(futureValue())} `}
          </Typography>
          na Step
        </Typography>
      </Box>
      <Box ml={2} mb={3}>
        <Typography variant="h6">
          Seu $ parado {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(income * (tax / 100) * time)}
          <Typography variant="caption" color="error">
            {` (-${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(futureValue() - (income * (tax / 100) * time))})`}
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};

export default Main;
