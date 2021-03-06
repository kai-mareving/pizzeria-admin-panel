import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import Hero from '../../layout/Hero/Hero';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const demoContent = [
  {
    orderTime: '12:00',
    id: '1',
    order: 234,
    dishes: ['Greek Pizza', 'Tomato Salad'],
    price: '$43',
  },
  {
    orderTime: '12:30',
    id: '2',
    order: 356,
    dishes: ['Four Cheese Pizza', 'Expresso'],
    price: '$14',
  },
  {
    orderTime: '12:45',
    id: '3',
    order: 410,
    dishes: ['Paprika Pizza', 'Cheese Salad', 'Caffe Latte'],
    price: '$42',
  },
  {
    orderTime: '13:30',
    id: '4',
    order: 415,
    dishes: ['Greek Pizza', 'Macchiatto', 'Water'],
    price: '$16',
  },
  {
    orderTime: '14:00',
    id: '2',
    order: 502,
    dishes: ['Paprika Pizza', 'Expresso'],
    price: '$15',
  },
  {
    orderTime: '14:00',
    id: '3',
    order: 518,
    dishes: ['Margerita Pizza', 'Latte'],
    price: '$14',
  },
  {
    orderTime: '14:10',
    id: '4',
    order: 607,
    dishes: ['Mushroom Pizza', 'Cucumber Salad'],
    price: '$41',
  },
  {
    orderTime: '14:30',
    id: '5',
    order: 643,
    dishes: ['Pepperoni Pizza', 'Salad'],
    price: '$40',
  },
  {
    orderTime: '16:20',
    id: 'online',
    order: 673,
    dishes: ['Pepperoni Pizza', 'Donut'],
    price: '$44',
  },
  {
    orderTime: '17:00',
    id: '6',
    order: 679,
    dishes: ['Margherita', 'Expresso', 'Donut'],
    price: '$20',
  },
  {
    orderTime: '19:00',
    id: 'online',
    order: 706,
    dishes: ['Pepperoni Pizza', 'Macchiatto'],
    price: '$17',
  },
  {
    orderTime: '19:30',
    id: '5',
    order: 712,
    dishes: ['Greek Pizza', 'Water'],
    price: '$16',
  },
];

const Kitchen = (props) => {
  return (
    <div className={styles.component}>
      <Hero titleText={props.title} imageSrc='https://i.imgur.com/i5M5SAT.jpg' />
      <Paper elevation={24}>
        <Table size="small">
          <TableHead className={styles.tablehead}>
            <TableRow>
              <TableCell>Order Time</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>Order</TableCell>
              <TableCell>Dishes</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.order}>
                <TableCell>{row.orderTime}</TableCell>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.order}</TableCell>
                <TableCell>
                  {row.dishes.map(dish => (
                    <p key={dish}>{dish}</p>
                  ))}
                </TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <GreenCheckbox
                    value="completed"
                    inputProps={{ 'aria-label': 'completed' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

Kitchen.propTypes = {
  title: PropTypes.string,
};
Kitchen.defaultProps = {
  title: 'Kitchen view',
};

export default Kitchen;
