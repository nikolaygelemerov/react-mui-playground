import logo from '@assets/logo.svg';
import { makeStyles } from 'tss-react/mui';

import { cloneElement, memo } from 'react';

import { AppBar, Toolbar, useScrollTrigger } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';

import { Button, Menu, Navigation } from 'shared-ui';

import pages from '@pages';

import styles from './Header.scss';

const useStyles = makeStyles()(() => {
  return {
    button: {
      marginLeft: '50px',
      marginRight: '25px'
    }
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

  const { mode, setMode } = useColorScheme();

  return (
    <ElevationScroll>
      <AppBar enableColorOnDark>
        <Toolbar disableGutters>
          <img alt="company logo" className={styles.Image} src={logo} />
          <Navigation pages={pages} />
          <Button
            className={classes.button}
            onClick={() => {
              setMode(mode === 'light' ? 'dark' : 'light');
            }}
            text={mode === 'light' ? 'Turn dark' : 'Turn light'}
            variant="contained"
          />
          <Menu
            buttonId="button-header"
            buttonText="Menu"
            className={classes.button}
            menuId="menu-header"
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
          />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
});

Header.displayName = 'Header';
