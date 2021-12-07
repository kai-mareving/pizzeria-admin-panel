import React from 'react';
import styles from './Dashboard.module.scss';
import PropTypes from 'prop-types';
import Hero from '../../layout/Hero/Hero';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const orderStatistics = [
  {
    id: '1',
    type: 'REMOTE',
    quantity: 234,
  },
  {
    id: '2',
    type: 'LOCAL',
    quantity: 574,
  },
];

const Dashboard = (props) => (
  <div className={styles.component}>
    <Hero titleText={props.title} imageSrc='https://i.imgur.com/Nnusvb4.jpg' />
    <Container maxWidth='lg' className={styles.container}>
      <Paper elevation={24}>
        <Table size='medium'>
          <TableHead className={styles.tablehead}>
            <TableRow>
              <TableCell>Order Type</TableCell>
              <TableCell>Order Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderStatistics.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ Paper>
    </ Container>
  </div>
);

Dashboard.propTypes = {
  title: PropTypes.string,
};
Dashboard.defaultProps = {
  title: 'Dashboard view',
};

export default Dashboard;
