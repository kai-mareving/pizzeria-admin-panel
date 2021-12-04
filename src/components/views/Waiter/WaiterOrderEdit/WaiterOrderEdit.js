import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterOrderEdit.module.scss';
import Paper from '@material-ui/core/Paper';

const WaiterOrderEdit = (props) => {
  return (
    <div className={styles.component}>
      <Paper className={styles.container}>
        <h1>{props.match.params.id}</h1>
      </ Paper>
    </div>
  );
};

WaiterOrderEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default WaiterOrderEdit;
