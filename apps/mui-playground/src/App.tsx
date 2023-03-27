import { FC, memo, ReactNode } from 'react';

import { Container, CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from './theme';

import { Header } from '@components';

import styles from './App.scss';

interface AppProps {
  children: ReactNode;
}

export const App: FC<AppProps> = memo(({ children }) => {
  return (
    <main className={styles.Container}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth={false} sx={{ py: 20 }}>
          {children}
        </Container>
      </ThemeProvider>
    </main>
  );
});

App.displayName = 'App';
