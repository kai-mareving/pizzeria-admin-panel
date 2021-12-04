import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const dishes = [
  {
    id: '1',
    label: 'Nonna Alba\'s Margeritta Pizza',
  },
  {
    id: '2',
    label: 'Zio Stefano\'s Donut',
  },
  {
    id: '3',
    label: 'Nonna Alba\'s Pepperoni Pizza',
  },
  {
    id: '4',
    label: 'Nonno Alberto\'s Tomato Olive Salad',
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

export default function DishTextField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-dishes"
          select
          label="Select"
          helperText="Please select a dish"
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
