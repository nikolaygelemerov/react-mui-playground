import '@fontsource/pacifico/400.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  type PaletteCustom = Record<string, string>;

  interface PaletteOptions {
    custom: PaletteCustom;
  }

  // import { makeStyles } from 'tss-react/mui';
  // relies on Palette interface
  // optionally can augment Theme
  interface Palette {
    custom: PaletteCustom;
  }
}

const customMain = '#f37e39';
const primaryMain = '#0b72b9';
const secondaryMain = '#fff';

export const themeOptions: ThemeOptions = {
  palette: {
    custom: { main: customMain },
    primary: { main: primaryMain },
    secondary: { main: secondaryMain }
  },
  typography: {
    body2: {
      fontWeight: 300
    },
    button: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none'
    }
  }
};
