import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import { Link } from 'react-router-dom';

function ListItem(props) {
  let titleArray = props.title.split(' ');
  let link = titleArray[1].toLowerCase(); //[1] because [0] is a space

  return (
    <div className={styles.component}>
      {/* <FontAwesomeIcon icon={props.icon} /> */}<Link to={`${process.env.PUBLIC_URL}/${link}`} activeclassname='active'>{props.title}
      </Link>
    </div>
  );
}

ListItem.propTypes = {
  // icon: PropTypes.object,
  title: PropTypes.string,
};

export default ListItem;
