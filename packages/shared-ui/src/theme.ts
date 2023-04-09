import '@fontsource/pacifico/400.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { blue, grey } from '@mui/material/colors';
import { CssVarsThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  type PaletteCustom = Record<string, string>;

  interface PaletteOptions {
    custom: PaletteCustom;
  }

  interface Palette {
    custom: PaletteCustom;
  }
}

export const themeOptions: CssVarsThemeOptions = {
  colorSchemes: {
    dark: {
      palette: {
        custom: { main: grey[300] },
        primary: { main: grey[800] },
        secondary: { main: blue[400] }
      }
    },
    light: {
      palette: {
        custom: { main: grey[800] },
        primary: { main: blue[400] },
        secondary: { main: grey[200] }
      }
    }
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({ color: theme.palette.secondary.main, textTransform: 'none' })
      }
    }
  },

  typography: {
    body2: {
      fontWeight: 300
    },
    button: {
      fontFamily: 'Pacifico',
      fontSize: '1rem'
    }
  }
};
