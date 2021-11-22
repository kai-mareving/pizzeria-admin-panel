import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './PageNav.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Grid, Row, Col } from 'react-flexbox-grid';

const PageNav = () => {

  return (
    <header className={styles.component}>
      <Grid>
        <Row between="md" middle="xs">
          <Col md={3} lg={2}>
            <Link to='/'>
              <div className={styles.logo}>
                {/* <FontAwesomeIcon icon={faPizzaSlice} /> */}
                <span className={styles.name}>Admin Panel</span>
              </div>
            </Link>
          </Col>
          <Col md={6}>
            <nav>
              <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</NavLink>
              <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
              <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
              <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</NavLink>
              <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
            </nav>
          </Col>
          <Col md={3} lg={2}>
            <div className={styles.contact}>
              {/* <FontAwesomeIcon icon={faPhone} /> */}<span>+48 889 900 900</span>
            </div>
          </Col>
        </Row>
      </Grid>
    </header>
  );
};

export default PageNav;
