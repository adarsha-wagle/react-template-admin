// import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// import InputAdornment from '@mui/material/InputAdornment';

type TForgetPasswordProps = {
  toggleForm: () => void;
};

export default function ForgetPasswordForm({ toggleForm }: TForgetPasswordProps) {
  //   const theme = useTheme();

  // const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        {/* <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Button variant="text" sx={{ textTransform: 'none' }} onClick={toggleForm}>
          Back to Login
        </Button>
      </Stack>

      <Button fullWidth size="large" type="submit" variant="contained" color="inherit">
        Reset
      </Button>
    </>
  );
}
