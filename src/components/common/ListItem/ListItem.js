import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './ListItem.module.scss';

function ListItem(props) {
  const titleArray = props.title.split(' ');
  const link = titleArray[0].toLowerCase();
  console.log(link);

  return (
    <div className={styles.component}>
      <Icon name={props.icon} /><span><a className={styles.viewLink} href={link}>{props.title}</a></span>
    </div>
  );
}

ListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default ListItem;
