import type { Meta } from '@storybook/react';
import type { StoryFn } from '@storybook/react';

import type { ButtonProps } from './Button';
import { Button as ButtonCmp } from './Button';

export default {
  component: ButtonCmp,
  title: 'UI/Button'
} as Meta<typeof ButtonCmp>;

export const Button: StoryFn<ButtonProps> = (args) => <ButtonCmp {...args} />;

Button.args = {
  onClick: () => {
    console.log('Button Click!');
  },
  text: 'Click me!',
  variant: 'contained'
};
