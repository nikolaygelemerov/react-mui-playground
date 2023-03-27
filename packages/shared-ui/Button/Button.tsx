import { memo } from 'react';

export const Button = memo(() => {
  return <button type="button">dsd Button</button>;
});

Button.displayName = 'Button';
