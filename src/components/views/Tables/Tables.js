import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const Tables = (props) => {
  return (
    <div className={styles.component}>
      <h2>{props.title}</h2>
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
