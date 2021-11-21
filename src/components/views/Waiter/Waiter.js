import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';

const Waiter = (props) => {
  return (
    <div className={styles.component}>
      <PageTitle text={props.title} />
      <h2>Id: {props.match.params.id}</h2>
      <ul className={styles.linkList}>
        <li><Link to={`${process.env.PUBLIC_URL}/waiter/order/55`} activeClassName='active'>Order
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
