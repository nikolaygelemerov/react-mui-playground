import { memo } from 'react';

export const Button = memo(() => {
  return <button type="button">Button</button>;
});

Button.displayName = 'Button';
