import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const tables = [
  {
    id: '1',
    label: 'Table 1',
  },
  {
    id: '2',
    label: 'Table 2',
  },
  {
    id: '3',
    label: 'Table 3',
  },
  {
    id: '4',
    label: 'Table 4',
  },
  {
    id: '5',
    label: 'Table 5',
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

export default function TablesTextField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-tables"
          select
          label="Select"
          helperText="Select a table"
        >
          {tables.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}