import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Navigation as NavigationCmp } from './Navigation';

export default {
  component: NavigationCmp,
  title: 'Widgets/Navigation'
} as ComponentMeta<typeof NavigationCmp>;

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

const Template: ComponentStory<typeof NavigationCmp> = (): JSX.Element => (
  <div style={{ backgroundColor: 'grey', borderRadius: '4px', padding: '20px' }}>
    <NavigationCmp pages={PAGES} />
  </div>
);

export const Navigation = Template.bind({});
Navigation.args = {};
