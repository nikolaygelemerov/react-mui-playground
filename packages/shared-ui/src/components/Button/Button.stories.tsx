import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button as ButtonCmp } from './Button';

export default {
  component: ButtonCmp,
  title: 'UI/Button'
} as ComponentMeta<typeof ButtonCmp>;

const Template: ComponentStory<typeof ButtonCmp> = (): JSX.Element => (
  <ButtonCmp onClick={function (): void {}} text="Click me!" variant={undefined} />
);

export const Button = Template.bind({});
Button.args = {};
