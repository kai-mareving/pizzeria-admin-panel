import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const Waiter = (props) => {
  return (
    <div className={styles.component}>
      <h2>{props.title}</h2>
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
