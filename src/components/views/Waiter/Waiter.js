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

// const demoContent = [
//   { id: '1', status: 'free', order: null },
//   { id: '2', status: 'thinking', order: null },
//   { id: '3', status: 'ordered', order: 123 },
//   { id: '4', status: 'prepared', order: 234 },
//   { id: '5', status: 'delivered', order: 345 },
//   { id: '6', status: 'paid', order: 456 },
// ];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button>new order</Button>
        </>
      );
    case 'thinking':
      return (<Button>new order</Button>);
    case 'ordered':
      return (<Button>prepared</Button>);
    case 'prepared':
      return (<Button>delivered</Button>);
    case 'delivered':
      return (<Button>paid</Button>);
    case 'paid':
      return (<Button>free</Button>);
    default:
      return null;
  }
};

/* *** Component *** */
class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    title: PropTypes.string,
    match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  }

  static defaultProps = {
    title: 'Waiter view',
  };

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(status){
    switch (status) {
      case 'free':
        return (
          <>
            <Button>thinking</Button>
            <Button>new order</Button>
          </>
        );
      case 'thinking':
        return ( <Button>new order</Button> );
      case 'ordered':
        return ( <Button>prepared</Button> );
      case 'prepared':
        return ( <Button>delivered</Button> );
      case 'delivered':
        return ( <Button>paid</Button> );
      case 'paid':
        return ( <Button>free</Button> );
      default:
        return null;
    }
  };

  render() {
    const { loading: { active, error }, tables } = this.props;

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
          <Hero titleText={this.props.title} imageSrc='https://i.imgur.com/mx6BQiG.jpg' />
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
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button className={styles.button} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status)}
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
