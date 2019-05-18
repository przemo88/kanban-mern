import React from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './Header.css';
 
export function Header(props, context) {

  return (
    <div className={styles.header}>
      <h2>Kanban App</h2>
      {context.router.isActive('/', true)}
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  // intl: PropTypes.object.isRequired,
};

export default Header;
