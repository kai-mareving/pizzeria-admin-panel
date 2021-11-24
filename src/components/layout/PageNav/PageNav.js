import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';

const PageNav = () => {

  return (
    <header className={styles.component}>
      <Grid>
        <Row between="md" middle="xs">
          <Col md={3} lg={2}>
            <Button component={NavLink} className={styles.logo} exact to={`${process.env.PUBLIC_URL}/`}>Admin Panel</Button>
          </Col>
          <Col md={6}>
            <nav>
              <Button component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</Button>
              <Button component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
              <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
              <Button component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
              <Button component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
            </nav>
          </Col>
          <Col md={3} lg={2}>
            <div className={styles.contact}>
              +48 889 900 900
            </div>
          </Col>
        </Row>
      </Grid>
    </header>
  );
};

export default PageNav;
