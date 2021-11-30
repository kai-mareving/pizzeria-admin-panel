import React from 'react';
import styles from './TablesBookingNew.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import DatePickers from '../../../features/DatePicker';

function createData(info, details) {
  return { info, details };
}

const rows = [
  createData('Date and Time:', <DatePickers />),
];

const TablesBookingNew = () => (
  <div className={styles.component}>
    <h2>
      Reservation of table:
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
          variant="outlined">Book Table
        </Button>
      </ Container>
    </Paper>
  </div>
);

export default TablesBookingNew;
