import { CssVarsThemeOptions, experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { themeOptions } from 'shared-ui';

export const newThemeOptions: CssVarsThemeOptions = {};

export const theme = extendTheme(deepmerge(themeOptions, newThemeOptions));
