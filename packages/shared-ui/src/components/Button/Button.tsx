import { memo } from 'react';

import { Button as ButtonMUI, ButtonProps as ButtonPropsMUI } from '@mui/material';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  variant: ButtonPropsMUI['variant'];
}

export const Button = memo<ButtonProps>(({ onClick, variant }) => {
  const rss = 20;

  return <ButtonMUI onClick={onClick} variant={variant} />;
});

Button.displayName = 'Button';
