import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import Hero from '../../layout/Hero/Hero';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Tables = (props) => {

  function createData(hour, table1, table2, table3, table4, table5, table6) {
    return { hour, table1, table2, table3, table4, table5, table6 };
  }

  const rows = [
    createData('12:00', null, 'Brent Miller', 'Rorry Gilmore', null, null, null),
    createData('12:30', null, null, null, null, null, null),
    createData('13:00', null, null, null, null, null, 'Barry Vikingstone'),
    createData('13:30', null, null, 'Lisa Steinwick', null, null, null),
    createData('14:00', null, 'Samuel K. Grinfogg', null, null, null, null),
    createData('14:30', null, null, null, null, null, null),
    createData('15:00', 'Christina Renthon', null, null, null, null, 'John D. Albamore'),
    createData('15:30', null, 'Drew Attkins', null, null, null, null),
    createData('16:00', null, null, null, null, 'Ann Galagher', null),
    createData('16:30', 'Willy Malone', null, null, null, null, null),
    createData('17:00', null, null, 'James Sandstog', null, null, null),
    createData('17:30', null, null, null, 'Monika C. Dhosena', null, null),
    createData('18:00', null, null, 'Thorgan Powell', null, null, null),
    createData('18:30', null, null, null, null, null, 'Carl Hoqunsi'),
    createData('19:00', null, null, null, 'Radgha S. Barry', null, null),
  ];

  return (
    <div className={styles.component}>
      <Hero titleText={props.title} imageSrc='https://i.imgur.com/84kZj2f.jpg' />
      <Paper className={styles.container}>
        <Button className={styles.button} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Table
        </Button>
        <Button className={styles.button} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'> New Event
        </Button>
      </ Paper>
      <Paper className={styles.container}>
        <form noValidate>
          <TextField
            id="datetime-local"
            label="Pick a Date and Time"
            type="datetime-local"
            defaultValue="2021-11-30T10:30"
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <Toolbar />
        <Table className={styles.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Hour</TableCell>
              <TableCell align="center">Table 1</TableCell>
              <TableCell align="center">Table 2</TableCell>
              <TableCell align="center">Table 3</TableCell>
              <TableCell align="center">Table 4</TableCell>
              <TableCell align="center">Table 5</TableCell>
              <TableCell align="center">Table 6</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.hour}>
                <TableCell>{row.hour}</TableCell>
                <TableCell>
                  {row.table1 && (
                    <Button
                      className={styles.button}
                      startIcon={<InfoOutlinedIcon />}
                      component={Link}
                      size="small"
                      variant="outlined"
                      color="primary"
                      to={`${process.env.PUBLIC_URL}/tables/booking/${row.table1}`}
                    >
                      {row.table1}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table2 && (
                    <Button
                      className={styles.button}
                      startIcon={<InfoOutlinedIcon />}
                      component={Link}
                      size="small"
                      variant="outlined"
                      color="primary"
                      to={`${process.env.PUBLIC_URL}/tables/events/${row.table2}`}
                    >
                      {row.table2}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table3 && (
                    <Button
                      className={styles.button}
                      startIcon={<InfoOutlinedIcon />}
                      component={Link}
                      size="small"
                      variant="outlined"
                      color="primary"
                      to={`${process.env.PUBLIC_URL}/tables/events/${row.table3}`}
                    >
                      {row.table3}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table4 && (
                    <Button
                      className={styles.button}
                      startIcon={<InfoOutlinedIcon />}
                      component={Link}
                      size="small"
                      variant="outlined"
                      color="primary"
                      to={`${process.env.PUBLIC_URL}/tables/booking/${row.table4}`}
                    >
                      {row.table4}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table5 && (
                    <Button
                      className={styles.button}
                      startIcon={<InfoOutlinedIcon />}
                      component={Link}
                      size="small"
                      variant="outlined"
                      color="primary"
                      to={`${process.env.PUBLIC_URL}/tables/booking/${row.table5}`}
                    >
                      {row.table5}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table6 && (
                    <Button
                      className={styles.button}
                      startIcon={<InfoOutlinedIcon />}
                      component={Link}
                      size="small"
                      variant="outlined"
                      color="primary"
                      to={`${process.env.PUBLIC_URL}/tables/booking/${row.table6}`}
                    >
                      {row.table6}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

Tables.propTypes = {
  title: PropTypes.string,
};
Tables.defaultProps = {
  title: 'Tables view',
};

export default Tables;
