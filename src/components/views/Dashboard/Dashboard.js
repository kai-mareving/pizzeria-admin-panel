import React from 'react';
import styles from './Dashboard.module.scss';
import Section from '../../layout/Section/Section';
import Hero from '../../layout/Hero/Hero';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Dashboard = () => (
  <Section variant='has-hero'>
    <Hero titleText='Dashboard View' imageSrc='http://uploads.kodilla.com/bootcamp/fer/13.router/image-1.jpg' />
    <Grid>
      <Row middle="md">
        <Col md={6}>
          <h1 className={styles.title}>Welcome to Dashboard</h1>
          <p className={styles.intro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies eros eu nisl vestibulum iaculis. Maecenas dapibus lorem quis ex ornare dignissim. Donec lobortis commodo augue, vel accumsan nunc facilisis vitae. Suspendisse bibendum congue sapien ut elementum. Nunc pellentesque, tortor et dignissim fermentum, purus mi sagittis neque, ut iaculis arcu lorem nec tellus. Integer in viverra lectus, vitae sollicitudin nulla. Sed mollis at odio eu pretium. Donec porta ligula sed diam pulvinar viverra.</p>
        </Col>
        <Col xs={12} md={5} mdOffset={1} xl={3} xlOffset={2}>
          <List variant='solid'>
            <ListItem title='Tables View' icon='utensils' />
            <ListItem title='Waiter View' icon='pray' />
            <ListItem title='Kitchen View' icon='bread-slice' />
          </List>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default Dashboard;
