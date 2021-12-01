import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesEventEdit.module.scss';
import Paper from '@material-ui/core/Paper';

const TablesEventEdit = (props) => {
  return (
    <div className={styles.component}>
      <Paper className={styles.container}>
        <h1>{props.match.params.id}</h1>
      </ Paper>
    </div>
  );
};

TablesEventEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default TablesEventEdit;
