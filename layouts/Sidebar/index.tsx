// @src/components/Sidebar.jsx
import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import styles from './Sidebar.module.css';

const Sidebar = ({ navigationData }) => {
  const [currentRoute, setCurrentRoute] = useState('Home');

  const renderIcon = useCallback((element) => {
    switch (element) {
      case 'Home':
        return 'Home';
      case 'Gallery':
        return 'Gallery';
      case 'Store':
        return 'Store';
      case 'Favorites':
        return 'Favorites';
      case 'Saved':
        return 'Saved';
    }
  }, []);

  return (
    <nav className={styles.wrapper}>
      <span className={styles.logo}>logo</span>
      <ul className={styles.navListItems}>
        {navigationData.map((element, index) => (
          <li
            key={index}
            className={classNames([styles.navItem, currentRoute === element && styles.navItemActive, 'group'])}
            onClick={() => setCurrentRoute(element)}
          >
            {renderIcon(element)}
            <span className={classNames([styles.tooltip, 'group-hover:inline'])}>{element}</span>
          </li>
        ))}
      </ul>
      <div className={styles.bottomWrapper}>
        <div className={styles.notifications}>
          <span className={styles.badge}>24</span>
          bell
        </div>
        <span className={styles.settingsLogo}>setting</span>
      </div>
    </nav>
  );
};

export default Sidebar;
