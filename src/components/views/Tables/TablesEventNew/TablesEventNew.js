import React from 'react';
import styles from './TablesEventNew.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import DatePicker from '../../../features/DatePicker';
import TextField from '../../../features/TextField';
import TableNoField from '../../../features/TableNoField';
import PeopleNoField from '../../../features/PeopleNoField';

function createData(info, details) {
  return { info, details };
}

const rows = [
  createData('Date and Time:', <DatePicker />),
  createData('First and last name:', <TextField />),
  createData('Table number:', <TableNoField />),
  createData('Number of people::', <PeopleNoField />),
];

const TablesEventsNew = () => (
  <div className={styles.component}>
    <h2>
      Reservation of event:
    </h2>
    <Paper className={styles.component}>
      <Table >
        <TableHead >
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.info}>
              <TableCell>
                {row.info}
              </TableCell>
              <TableCell className={styles.table}>
                {row.details}
              </TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Container className={styles.button}>
        <Button color="secondary"
          variant="outlined">Book Event
        </Button>
      </ Container>
    </Paper>
  </div>
);

export default TablesEventsNew;
