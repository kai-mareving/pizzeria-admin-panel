import React from 'react';
import styles from './Hero.module.scss';
import PropTypes from 'prop-types';

const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <h2 className={styles.title}>{titleText}</h2>
    {/* jsx-a11y/alt-text */}
    <img className={styles.image} src={imageSrc} alt='tranquil lake' />
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Hero;
