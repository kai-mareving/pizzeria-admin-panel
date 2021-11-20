import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';

const Tables = (props) => {
  return (
    <div className={styles.component}>
      <PageTitle text={props.title} />
      <h2>Id: {props.match.params.id}</h2>
      <ul className={styles.linkList}>
        <li><Link to={`${process.env.PUBLIC_URL}/tables/booking/54`} activeClassName='active'>Booking
        </Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New booking
        </Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/tables/events/34`} activeClassName='active'>Events
        </Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New event
        </Link></li>
      </ul>
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
