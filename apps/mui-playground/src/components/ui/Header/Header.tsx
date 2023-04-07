import logo from '@assets/logo.svg';
import { makeStyles } from 'tss-react/mui';

import { cloneElement, memo } from 'react';

import { AppBar, Button, Toolbar, useScrollTrigger } from '@mui/material';

import { CSSObject } from '@emotion/react';

import { Menu, Navigation } from 'shared-ui';

import pages from '@pages';

import styles from './Header.scss';

const useStyles = makeStyles()((theme) => {
  return {
    button: {
      ...theme.typography.button,
      backgroundColor: theme.palette.custom.main,
      borderRadius: '50px',
      height: '45px',
      marginLeft: '50px',
      marginRight: '25px'
    } as CSSObject
  };
});

interface ElevationScrollProps {
  children: React.ReactElement;
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

export const Header = memo(() => {
  const { classes } = useStyles();

  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar disableGutters>
          <img alt="company logo" className={styles.Image} src={logo} />
          <Navigation pages={pages} />
          <Button className={classes.button} variant="contained">
            Free Estimate
          </Button>
          <Menu
            buttonId="button-header"
            buttonText="Menu"
            options={[
              {
                id: 1,
                label: 'One',
                onClick: () => {
                  console.log('One');
                }
              },
              {
                id: 2,
                label: 'Two',
                onClick: () => {
                  console.log('Two');
                }
              },
              {
                id: 3,
                label: 'Three',
                onClick: () => {
                  console.log('Three');
                }
              }
            ]}
            menuId="menu-header"
          />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
});

Header.displayName = 'Header';
