import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';
import Hero from '../../layout/Hero/Hero';

const Tables = (props) => {
  return (
    <div className={styles.component}>
      <Hero titleText='Tables' imageSrc='https://i.imgur.com/84kZj2f.jpg' />
      <PageTitle text={props.title} />
      <h2>Id: {props.match.params.id}</h2>
      <ul className={styles.linkList}>
        <li><Link to={`${process.env.PUBLIC_URL}/tables/booking/54`} activeclassname='active'>Booking
        </Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeclassname='active'>New booking
        </Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/tables/events/34`} activeclassname='active'>Events
        </Link></li>
        <li><Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeclassname='active'>New event
        </Link></li>
      </ul>
    </div>
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
