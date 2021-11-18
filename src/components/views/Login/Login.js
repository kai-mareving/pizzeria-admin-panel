import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';

const Login = (props) => {
  return (
    <div className={styles.component}>
      <h2>{props.title}</h2>
    </div>
  );
};

Login.propTypes = {
  title: PropTypes.string,
};
Login.defaultProps = {
  title: 'Login view',
};

export default Login;
