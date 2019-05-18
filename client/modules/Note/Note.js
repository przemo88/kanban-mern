import React, { Component } from 'react';
import styles from './Note.css';
import PropTypes from 'prop-types';

const Note = props =>

  <li className={styles.Note}>{props.children}</li>;

Note.propTypes = {
  children: PropTypes.any,
};

export default Note;