import { Story } from '@storybook/react';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { themeOptions } from '../src/theme';

const theme = createTheme(themeOptions);

export const decorators = [
  (StoryFn: Story) => (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <StoryFn />
        </BrowserRouter>
      </ThemeProvider>
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
