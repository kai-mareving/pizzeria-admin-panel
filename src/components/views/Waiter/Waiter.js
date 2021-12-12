import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { NavLink } from 'react-router-dom';
import Hero from '../../layout/Hero/Hero';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

/* *** Component *** */
class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    title: PropTypes.string,
    tables: PropTypes.any,
    length: PropTypes.number,
    map: PropTypes.func,
    updateStatus: PropTypes.func,
  }

  static defaultProps = {
    title: 'Waiter view',
  };

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status, order) {
    const { updateStatus } = this.props;

    switch (status) {
      case 'free':
        return ( <Button onClick={() => updateStatus(id, 'thinking', order)}>thinking</Button> );
      case 'thinking':
        return ( <Button onClick={() => updateStatus(id, 'ordered', order)}>ordered</Button> );
      case 'ordered':
        return ( <Button onClick={() => updateStatus(id, 'prepared', order)}>prepaired</Button> );
      case 'prepared':
        return ( <Button onClick={() => updateStatus(id, 'paid', order)}>paid</Button> );
      case 'paid':
        return ( <Button onClick={() => updateStatus(id, 'delivered', order)}>delivered</Button> );
      case 'delivered':
        return ( <Button onClick={() => updateStatus(id, 'free', order)}>free</Button> );
      default:
        return null;
    }
  }

  render(){
    const { loading: { active, error }, tables, title } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Hero titleText={title} imageSrc='https://i.imgur.com/mx6BQiG.jpg' />
          <Button className={styles.button} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/new`}
            activeClassName='active'>New Order
          </Button>
          <Button className={styles.button} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/:id`}
            activeClassName='active'> Edit Order
          </Button>
          <Toolbar />
          <Table>
            <TableHead className={styles.tablehead}>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(table => (
                <TableRow key={table.id}>
                  <TableCell component='th' scope='row'>
                    {table.id}
                  </TableCell>
                  <TableCell>
                    {table.status}
                  </TableCell>
                  <TableCell>
                    {table.order && (
                      <Button className={styles.button} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/${table.order}`}>
                        {table.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(table.id, table.status, table.order)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ Paper>
      );
    }
  }
}

export default Waiter;
