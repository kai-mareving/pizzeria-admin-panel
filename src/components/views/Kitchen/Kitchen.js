import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import Hero from '../../layout/Hero/Hero';

const Kitchen = (props) => {
  return (
    <div className={styles.component}>
      <Hero titleText={props.title} imageSrc='https://i.imgur.com/i5M5SAT.jpg' />
    </div>
  );
};

Kitchen.propTypes = {
  title: PropTypes.string,
};
Kitchen.defaultProps = {
  title: 'Kitchen view',
};

export default Kitchen;
