import { makeStyles } from 'tss-react/mui';

import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Typography } from '@mui/material';

import pages from '@pages';

const useStyles = makeStyles()((theme) => ({
  NavLink: {
    color: theme.palette.custom.main,
    textDecoration: 'none'
  },
  NavLinkActive: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold'
  }
}));

export const Navigation = memo(() => {
  const { classes } = useStyles();

  return (
    <>
      {pages.map(({ name, path }) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? `${classes.NavLink} ${classes.NavLinkActive}` : classes.NavLink
          }
          key={path}
          to={path}
        >
          <Typography variant="body2">{name}</Typography>
        </NavLink>
      ))}
    </>
  );
});

Navigation.displayName = 'Navigation';
