import type { Preview, StoryFn } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme
} from '@mui/material/styles';

import { themeOptions } from '../src/theme';

const theme = extendTheme(themeOptions);

export const decorators = [
  (StoryFn: StoryFn) => (
    <>
      <CssBaseline />
      <CssVarsProvider theme={theme}>
        <BrowserRouter>
          <StoryFn />
        </BrowserRouter>
      </CssVarsProvider>
    </>
  )
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered'
  }
};

export default preview;
