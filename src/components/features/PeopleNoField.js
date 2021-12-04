import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const people = [
  {
    id: '1',
    label: '1',
  },
  {
    id: '2',
    label: '2',
  },
  {
    id: '3',
    label: '3',
  },
  {
    id: '4',
    label: '4',
  },
  {
    id: '5',
    label: '5',
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

export default function PeopleTextField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-people"
          select
          label="Select"
          helperText="Number of people"
        >
          {people.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
