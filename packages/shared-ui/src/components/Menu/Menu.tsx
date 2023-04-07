import React from 'react';

import { Button, MenuItem, Menu as MenuMUI, MenuProps as MenuPropsMUI } from '@mui/material';

interface MenuProps extends Pick<MenuPropsMUI, 'onClose'> {
  buttonId: string;
  buttonText: string;
  menuId: string;
  options: { id: string | number; label: string; onClick: () => void }[];
  variant?: MenuPropsMUI['variant'];
}

export const Menu = React.memo<MenuProps>(
  ({ buttonId, buttonText, menuId, onClose, options, variant = 'menu' }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = React.useCallback(
      (event: Record<string, never>, reason: 'backdropClick' | 'escapeKeyDown') => {
        setAnchorEl(null);

        if (onClose) {
          onClose(event, reason);
        }
      },
      [onClose]
    );

    return (
      <>
        <Button
          color="secondary"
          id={buttonId}
          aria-controls={open ? menuId : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {buttonText}
        </Button>
        <MenuMUI
          id={menuId}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': buttonId
          }}
          variant={variant}
        >
          {options.map((option) => (
            <MenuItem
              key={option.id}
              onClick={() => {
                option.onClick();
                setAnchorEl(null);
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </MenuMUI>
      </>
    );
  }
);

Menu.displayName = 'Menu';
