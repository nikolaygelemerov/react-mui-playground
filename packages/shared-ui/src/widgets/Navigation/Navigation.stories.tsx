import type { Meta } from '@storybook/react';
import type { StoryFn } from '@storybook/react';

import type { NavigationProps } from './Navigation';
import { Navigation as NavigationCmp } from './Navigation';

export default {
  component: NavigationCmp,
  title: 'Widgets/Navigation'
} as Meta<typeof NavigationCmp>;

const PAGES = [
  {
    Element: () => <h1>Home</h1>,
    name: 'home',
    path: 'home'
  },
  {
    Element: () => <h1>Dashboard</h1>,
    name: 'dashboard',
    path: 'dashboard'
  }
];

export const Navigation: StoryFn<NavigationProps> = (args) => (
  <div style={{ backgroundColor: 'grey', borderRadius: '4px', padding: '20px' }}>
    <NavigationCmp {...args} />
  </div>
);

Navigation.args = { pages: PAGES };
