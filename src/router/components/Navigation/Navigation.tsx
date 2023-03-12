import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import pages from '@pages';

import styles from './Navigation.scss';

export const Navigation = memo(() => {
  return (
    <>
      {pages.map(({ name, path }) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.NavLink} ${styles.NavLinkActive}` : styles.NavLink
          }
          key={path}
          to={path}
        >
          {name}
        </NavLink>
      ))}
    </>
  );
});

Navigation.displayName = 'Navigation';
