import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.module.scss';
import Icon from '../../common/Icon/Icon';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Grid>
          <Row between="md" middle="xs">
            <Col md={3} lg={2}>
              <Link to='/'>
                <div className={styles.logo}>
                  <Icon name='compass' />
                  <span className={styles.name}>Admin Panel</span>
                </div>
              </Link>
            </Col>
            <Col md={6}>
              <nav>
                <NavLink to='/' activeClassName='active'>Dashboard</NavLink>
                <NavLink to='/login' activeClassName='active'>Login</NavLink>
                <NavLink to='/tables' activeClassName='active'>Tables</NavLink>
                <NavLink to='/waiter' activeClassName='active'>Waiter</NavLink>
                <NavLink to='/kitchen' activeClassName='active'>Kitchen</NavLink>
              </nav>
            </Col>
            <Col md={3} lg={2}>
              <div className={styles.contact}>
                <Icon name='phone' /><span>+48 889 900 900</span>
              </div>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default Header;
