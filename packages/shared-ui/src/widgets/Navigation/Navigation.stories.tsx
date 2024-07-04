import type { Meta } from '@storybook/react';
import type { StoryFn } from '@storybook/react';

import { useState } from 'react';

import type { NavigationProps } from './Navigation';
import { Navigation as NavigationCmp } from './Navigation';

export default {
  component: NavigationCmp,
  title: 'Widgets/Navigation'
} as Meta<typeof NavigationCmp>;

const PAGES = [
  {
    Element: () => <h1>Home</h1>,
    name: 'Home',
    path: 'home'
  },
  {
    Element: () => <h1>Dashboard</h1>,
    name: 'Dashboard',
    path: 'dashboard'
  }
];

export const Navigation: StoryFn<NavigationProps> = (args) => {
  const [value, setValue] = useState(0);

  return (
    <div style={{ backgroundColor: 'grey', borderRadius: '4px', padding: '20px' }}>
      <NavigationCmp {...args} onChange={setValue}></NavigationCmp>
      {PAGES.map(
        ({ Element }, index) =>
          index === value && (
            <div id={`simple-tabpanel-${index}`} key={index}>
              <Element />
            </div>
          )
      )}
    </div>
  );
};

Navigation.args = { pages: PAGES };
