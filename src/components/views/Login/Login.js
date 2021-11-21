import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import Hero from '../../layout/Hero/Hero';
import PageTitle from '../../common/PageTitle/PageTitle';

const Login = (props) => {
  return (
    <div className={styles.component}>
      <Hero titleText='Login' imageSrc='https://i.imgur.com/2bCsis0.jpg' />
      <PageTitle text={props.title} />
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
