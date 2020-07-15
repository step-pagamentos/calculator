import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles((theme) => ({
  root: {
    color: 'black',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 12px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#e0e0e0',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
}))(Slider);

const formatValue = (value, type) => {
  switch (type) {
    case 'currency':
      return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    case 'tax':
      return formatTax(value);
    case 'time':
      return formatTime(value);
    default:
      return;
  }
};

const formatTax = (tax) => {
  return `${tax}%`;
};

const formatTime = (time) => {
  const years = Math.floor(time/12);
  const months = time % 12;
  let result = '';
  if (years === 1) {
    result = result.concat('1 ano');
  } else if (years > 1) {
    result = result.concat(`${years} anos`);
  }
  if (years !== 0 && months !== 0) {
    result = result.concat(' e ');
  }
  if (months === 1) {
    result = result.concat('1 mês');
  } else if (months > 1) {
    result = result.concat(`${months} meses`);
  }
  return result
};

export default ({ defaultValue, min, max, onChange, step, type, value }) => {
  return (
    <Box mt={2} ml={2} mr={2}>
      <Typography variant="h5">
        {formatValue(value, type)}
      </Typography>
      <IOSSlider
        aria-label="ios slider"
        max={max}
        min={min}
        step={step}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </Box>
  );
};
