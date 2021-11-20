import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = (props) => {
  return (
    <div className={styles.component}>
      <h2>{props.title}</h2>
      <ul className={styles.linkList}>
        <li><Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`} activeClassName='active'>Order
        </Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>New order
        </Link></li>
      </ul>
    </div>
  );
};

Waiter.propTypes = {
  title: PropTypes.string,
};
Waiter.defaultProps = {
  title: 'Waiter view',
};

export default Waiter;
