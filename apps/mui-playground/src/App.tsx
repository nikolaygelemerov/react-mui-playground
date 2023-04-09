import { FC, memo, ReactNode } from 'react';

import { Container, CssBaseline } from '@mui/material';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import { Header } from '@components';

import { theme } from './theme';

import styles from './App.scss';

interface AppProps {
  children: ReactNode;
}

export const App: FC<AppProps> = memo(({ children }) => {
  return (
    <main className={styles.Container}>
      <CssBaseline />
      <CssVarsProvider theme={theme}>
        <Header />
        <Container maxWidth={false} sx={{ py: 20 }}>
          {children}
        </Container>
      </CssVarsProvider>
    </main>
  );
});

App.displayName = 'App';
