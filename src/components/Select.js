import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 45,
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    fontSize: 18,
    fontWeight: 600,
    height: 18,
    padding: '36px 40px 36px 47px',
  },
}))(InputBase);

export default props => (
  <Select {...props} input={<BootstrapInput />} />
);
