import { memo } from 'react';

import type { ButtonProps as ButtonPropsMUI } from '@mui/material';
import { Button as ButtonMUI } from '@mui/material';

export interface ButtonProps {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  variant: ButtonPropsMUI['variant'];
}

export const Button = memo<ButtonProps>(({ className, onClick, text, variant }) => {
  return (
    <ButtonMUI className={className} onClick={onClick} variant={variant}>
      {text}
    </ButtonMUI>
  );
});

Button.displayName = 'Button';
