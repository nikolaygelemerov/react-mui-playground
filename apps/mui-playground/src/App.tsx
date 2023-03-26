import { cloneElement, FC, memo, ReactNode } from 'react';

import { Button } from 'ui';

import {
  AppBar,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  useScrollTrigger
} from '@mui/material';

import { Navigation } from '@root/router';

import { theme } from './theme';

import styles from './App.scss';

interface AppProps {
  children: ReactNode;
}

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

  console.log('trigger: ', trigger);

  return cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

export const App: FC<AppProps> = memo(({ children }) => {
  return (
    <main className={styles.Container}>
      <Button />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ElevationScroll>
          <AppBar>
            <Toolbar>
              <Navigation />
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Container maxWidth={false} sx={{ py: 20 }}>
          {children}
        </Container>
      </ThemeProvider>
    </main>
  );
});

App.displayName = 'App';
