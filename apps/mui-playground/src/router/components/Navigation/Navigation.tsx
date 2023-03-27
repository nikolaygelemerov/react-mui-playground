import { makeStyles } from 'tss-react/mui';

import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Typography, Tab, Tabs } from '@mui/material';

import pages from '@pages';

const useStyles = makeStyles()((theme) => ({
  NavLink: {
    color: theme.palette.custom.main,
    textDecoration: 'none'
  },
  NavLinkActive: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold'
  },
  tab: {},
  tabContainer: {
    marginLeft: 'auto'
  }
}));

export const Navigation = memo(() => {
  const { classes } = useStyles();

  return (
    <Tabs className={classes.tabContainer}>
      {pages.map(({ name, path }) => (
        <Tab
          className={classes.tab}
          key={path}
          label={
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.NavLink} ${classes.NavLinkActive}` : classes.NavLink
              }
              to={path}
            >
              <Typography variant="body2">{name}</Typography>
            </NavLink>
          }
        />
      ))}
    </Tabs>
  );
});

Navigation.displayName = 'Navigation';
