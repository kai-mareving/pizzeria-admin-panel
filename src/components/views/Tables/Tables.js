import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import Hero from '../../layout/Hero/Hero';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const demoContent = [
  { id: '1', status: 'free', booking: null },
  { id: '2', status: 'thinking', booking: null },
  { id: '3', status: 'booked', booking: 124 },
  { id: '4', status: 'booked', booking: 228 },
  { id: '5', status: 'booked', booking: 305 },
  { id: '6', status: 'booked', booking: 411 },
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button>new booking</Button>
        </>
      );
    case 'thinking':
      return (<Button>new booking</Button>);
    case 'booked':
      return (<Button>booked</Button>);
    default:
      return null;
  }
};

const Tables = (props) => {
  return (
    <Paper className={styles.component}>
      <Hero titleText={props.title} imageSrc='https://i.imgur.com/84kZj2f.jpg' />
      <Button className={styles.button} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Table
      </Button>
      <Button className={styles.button} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'> Edit Table
      </Button>
      <Button className={styles.button} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'> New Event
      </Button>
      <Button className={styles.button} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'> Edit Event
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Booking</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.booking && (
                  <Button className={styles.button} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/${row.booking}`}>
                    {row.booking}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </ Paper>
  );
};

Tables.propTypes = {
  title: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
Tables.defaultProps = {
  title: 'Tables view',
};

export default Tables;
