import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import Button from '@material-ui/core/Button';

const PageNav = () => {
  // need icon import
  return (
    <>
      <Button component={NavLink} exact to={`${process.env.PUBLIC_URL}/`}
        className={styles.logo} activeClassName='active'>Admin Panel</Button>
      <nav className={styles.component}>
        <Button component={NavLink} exact to={`${process.env.PUBLIC_URL}/`}
          className={styles.link} activeClassName='active'>Dashboard</Button>
        <Button component={NavLink} to={`${process.env.PUBLIC_URL}/login`}
          className={styles.link} activeClassName='active'>Login</Button>
        <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables`}
          className={styles.link} activeClassName='active'>Tables</Button>
        <Button component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`}
          className={styles.link} activeClassName='active'>Waiter</Button>
        <Button component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`}
          className={styles.link} activeClassName='active'>Kitchen</Button>
        <Button className={styles.link} >+48 889 900 900</Button>
      </nav>
    </>
  );
};

export default PageNav;
