// @ts-nocheck
/* eslint-disable */

import React from 'react';
import { Button, CircularProgress, ButtonProps } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

type TButtLoadingProps = {
  isLoading: boolean;
  buttonText: string;
  variant?: 'contained' | 'outlined' | 'text';
  sx?: SxProps<Theme>;
  loadingText?: string;
  onClick?: () => void;
  iconSize?: string;
  type?: 'submit' | 'button' | 'reset';
  initialIcon?: React.ReactNode;
} & Omit<ButtonProps, 'startIcon'>;

function ButtonLoading({
  isLoading,
  buttonText,
  variant = 'contained',
  sx = {},
  loadingText = '',
  iconSize = '20px',
  type = 'button',
  initialIcon = null,
  onClick = () => {},
  ...props
}: TButtLoadingProps) {
  return (
    <Button
      sx={{ ...sx }}
      type={type}
      variant={variant}
      disabled={isLoading}
      onClick={onClick}
      startIcon={isLoading ? <CircularProgress size={iconSize} color="inherit" /> : initialIcon}
      {...props}
    >
      {isLoading ? loadingText || buttonText : buttonText}
    </Button>
  );
}

export default ButtonLoading;
