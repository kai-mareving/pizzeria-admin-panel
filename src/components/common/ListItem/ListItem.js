import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ListItem.module.scss';

function ListItem(props) {
  const titleArray = props.title.split(' ');
  const link = titleArray[0].toLowerCase();
  console.log(link);

  return (
    <div className={styles.component}>
      <FontAwesomeIcon icon={props.icon} /><a className={styles.viewLink} href={process.env.PUBLIC_URL + link}>{props.title}</a>
    </div>
  );
}

ListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default ListItem;
