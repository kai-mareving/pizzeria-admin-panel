import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id='standard-select-drinks'
          select
          label='Select'
          helperText='Select a drink'
        >
          {dishes.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <IconButton color='primary' aria-label='add to shopping cart' onClick={() => { alert('clicked'); }}>
        <AddShoppingCartIcon />
      </IconButton>
    </form>
  );
}
