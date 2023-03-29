import { makeStyles } from 'tss-react/mui';

import { memo, useState } from 'react';
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

function a11yProps(index: number) {
  return {
    'aria-controls': `simple-tabpanel-${index}`,
    id: `simple-tab-${index}`
  };
}

export const Navigation = memo<NavigationProps>(({ pages }) => {
  const [value, setValue] = useState(0);

  const { classes } = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs className={classes.tabContainer} onChange={handleChange} value={value}>
      {pages.map(({ name, path }, index) => (
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
          {...a11yProps(index)}
        />
      ))}
    </Tabs>
  );
});

Navigation.displayName = 'Navigation';
