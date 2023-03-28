import { makeStyles } from 'tss-react/mui';

import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Tab, Tabs, Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => {
  return {
    NavLink: {
      color: theme.palette.custom.main,
      height: '100%',
      textDecoration: 'none',
      width: '100%'
    },
    NavLinkActive: {
      color: theme.palette.secondary.main,
      fontWeight: 'bold',
      height: '100%',
      width: '100%'
    },
    tab: {},
    tabContainer: {
      marginLeft: 'auto'
    }
  };
});

interface NavigationProps {
  pages: {
    Element: React.FC;
    name: string;
    path: string;
  }[];
}

export const Navigation = memo<NavigationProps>(({ pages }) => {
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
