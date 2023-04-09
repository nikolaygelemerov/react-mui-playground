import { Story } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme
} from '@mui/material/styles';

import { themeOptions } from '../src/theme';

const theme = extendTheme(themeOptions);

export const decorators = [
  (StoryFn: Story) => (
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

// Define parameters for Storybook
export const parameters = {
  // Configure Action Logger addon to show action arguments in the UI
  actions: { argTypesRegex: '^on[A-Z].*' },

  // Configure Control addon to match control inputs with control types
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },

  // Center the preview of the story in the Storybook UI
  layout: 'centered'
};
