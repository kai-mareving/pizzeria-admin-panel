import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';
import Hero from '../../layout/Hero/Hero';

const Waiter = (props) => {
  return (
    <div className={styles.component}>
      <Hero titleText='Waiter' imageSrc='https://i.imgur.com/mx6BQiG.jpg' />
      <PageTitle text={props.title} />
      <h2>Id: {props.match.params.id}</h2>
      <ul className={styles.linkList}>
        <li><Link to={`${process.env.PUBLIC_URL}/waiter/order/55`} activeclassname='active'>Order
        </Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeclassname='active'>New order
        </Link></li>
      </ul>
    </div>
  );
};

Waiter.propTypes = {
  title: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
Waiter.defaultProps = {
  title: 'Waiter view',
};

export default Waiter;
