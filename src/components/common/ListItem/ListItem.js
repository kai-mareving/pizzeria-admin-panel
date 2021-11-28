import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import { Link } from 'react-router-dom';

function ListItem(props) {
  let titleArray = props.title.split(' ');
  let link = titleArray[0].toLowerCase(); //remember to switch to [1] if [0] becomes a space again

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
