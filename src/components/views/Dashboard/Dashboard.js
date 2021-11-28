import React from 'react';
import styles from './Dashboard.module.scss';
import PropTypes from 'prop-types';
import Section from '../../layout/Section/Section';
import Hero from '../../layout/Hero/Hero';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
// import { faUtensils } from '@fortawesome/free-solid-svg-icons';
// import { faPray } from '@fortawesome/free-solid-svg-icons';
// import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Dashboard = (props) => (
  <Section variant='has-hero'>
    <Hero titleText={props.title} imageSrc='https://i.imgur.com/Nnusvb4.jpg' />
    <Grid>
      <Row middle="md">
        <Col md={6}>
          <h1 className={styles.title}>Welcome to Dashboard</h1>
          <p className={styles.intro}>On the right you will find links to other available modules.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies eros eu nisl vestibulum iaculis. Maecenas dapibus lorem quis ex ornare dignissim. Donec lobortis commodo augue, vel accumsan nunc facilisis vitae. Suspendisse bibendum congue sapien ut elementum. Nunc pellentesque, tortor et dignissim fermentum, purus mi sagittis neque, ut iaculis arcu lorem nec tellus.</p>
        </Col>
        <Col xs={12} md={5} mdOffset={1} xl={3} xlOffset={2}>
          <List variant='solid'>
            <ListItem title='Tables View' /* icon={faUtensils} */ />
            <ListItem title='Waiter View' /* icon={faPray} */ />
            <ListItem title='Kitchen View' /* icon={faBreadSlice} */ />
          </List>
        </Col>
      </Row>
    </Grid>
  </Section>
);

Dashboard.propTypes = {
  title: PropTypes.string,
};
Dashboard.defaultProps = {
  title: 'Dashboard view',
};

export default Dashboard;
