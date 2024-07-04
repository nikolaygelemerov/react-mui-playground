import { makeStyles } from 'tss-react/mui';

import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Tab, Tabs, Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => {
  return {
    tab: {
      '&.Mui-selected': {
        color: theme.palette.secondary.main
      }
    },
    tabContainer: {
      marginLeft: 'auto'
    },
    tabText: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'none'
    }
  };
});

export interface NavigationProps {
  onChange?: (newValue: number) => void;
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

export const Navigation = memo<NavigationProps>(({ onChange, pages }) => {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const { classes } = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    onChange?.(value);
  }, [onChange, value]);

  console.log('value: ', value);

  return (
    <>
      <Tabs
        className={classes.tabContainer}
        indicatorColor="secondary"
        onChange={handleChange}
        value={value}
      >
        {pages.map(({ name, path }, index) => (
          <Tab
            className={classes.tab}
            key={path}
            label={
              <Typography className={classes.tabText} variant="body2">
                {name}
              </Typography>
            }
            onClick={() => navigate(path)}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
    </>
  );
});

Navigation.displayName = 'Navigation';
