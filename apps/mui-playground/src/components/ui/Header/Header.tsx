import { cloneElement, memo } from 'react';

import { AppBar, Toolbar, useScrollTrigger } from '@mui/material';

import { Navigation } from 'shared-ui';

import logo from '@assets/logo.svg';

import styles from './Header.scss';

import pages from '@pages';

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
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar disableGutters>
          <img alt="company logo" className={styles.Image} src={logo} />
          <Navigation pages={pages} />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
});

Header.displayName = 'Header';
