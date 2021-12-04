import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TableNoField from '../../../features/TableNoField';
import SelectDishField from '../../../features/SelectDishField';
import Container from '@material-ui/core/Container';
import TextFields from '../../../features/TextField';

function createData(info, details) {
  return { info, details };
}

const rows = [
  createData('Table No:', <TableNoField />),
  createData('Choose a dish:', <SelectDishField />),
  createData('Total order amount:', <TextFields />),
];

const WaiterOrderNew = () => (
  <div className={styles.component}>
    <h2>
      New Order:
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Container className={styles.button}>
        <Button color="primary"
          variant="outlined">Add Order
        </Button>
      </Container>
    </Paper>
  </div>
);

export default WaiterOrderNew;
