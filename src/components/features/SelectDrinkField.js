import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const dishes = [
  {
    id: '1',
    label: 'Water',
  },
  {
    id: '2',
    label: 'Expresso',
  },
  {
    id: '3',
    label: 'Latte',
  },
  {
    id: '4',
    label: 'Machiatto',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function DrinksTextField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-drinks"
          select
          label="Select"
          helperText="Select a drink"
        >
          {dishes.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
