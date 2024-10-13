import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { SxProps, Theme } from '@mui/system';
import { Control, Controller, FieldErrors, FieldValues, Path, PathValue } from 'react-hook-form';

type TControlledInputFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  control: Control<T>;
  errors: FieldErrors<T>;
  type?: 'text' | 'number' | 'password' | 'email';
  defaultValue?: PathValue<T, Path<T>> | undefined | '';
  sx?: SxProps<Theme>;
};

function ControlledInputField<T extends FieldValues>({
  name,
  label,
  control,
  errors,
  type = 'text',
  defaultValue = '',
  sx = {},
}: TControlledInputFieldProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent focus loss
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          type={type === 'password' && showPassword ? 'text' : type}
          label={label}
          sx={{ backgroundColor: 'background.paper', ...sx }}
          error={Boolean(errors && errors[name])}
          helperText={errors && errors[name] && (errors[name]?.message as string)}
          InputProps={
            type === 'password'
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : undefined
          }
        />
      )}
    />
  );
}

export default ControlledInputField;
