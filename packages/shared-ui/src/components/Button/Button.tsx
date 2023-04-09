import { memo } from 'react';

import { Button as ButtonMUI, ButtonProps as ButtonPropsMUI } from '@mui/material';

interface ButtonProps {
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
