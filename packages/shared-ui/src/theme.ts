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

const customMain = '#fb79ec';
const primaryMain = '#0b72b9';
const primarySecondary = '#f2cd26';

export const themeOptions: ThemeOptions = {
  palette: {
    custom: { main: customMain },
    primary: { main: primaryMain },
    secondary: { main: primarySecondary }
  },
  typography: {
    body2: {
      fontWeight: 300
    }
  }
};
