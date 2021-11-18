import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';

const Kitchen = (props) => {
  return (
    <div className={styles.component}>
      <h2>{props.title}</h2>
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
