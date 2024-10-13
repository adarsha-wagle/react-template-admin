import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Logo from 'src/components/ui/logo.tsx';

import LoginForm from './login_form.tsx';
import ForgetPassword from './forget_password_form.tsx';

// ----------------------------------------------------------------------

export default function SectionLoginForm() {
  const [isForgetPasswordActive, setisForgetPasswordActive] = useState<boolean>(false);

  const toggleForm = () => {
    setisForgetPasswordActive(!isForgetPasswordActive);
  };

  return (
    <Box
      sx={{
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
          maxWidth: { xs: '6rem', md: '7rem', lg: '10rem' },
          maxHeight: {
            lg: '3.375rem',
            md: '2.95rem',
            xs: '2.5rem',
          },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 5 },
            width: 1,
            maxWidth: 480,
          }}
        >
          <Logo
            sx={{
              maxWidth: { xs: '10rem', md: '12rem', lg: '15rem' },
              maxHeight: {
                lg: '3.375rem',
                md: '2.95rem',
                xs: '2.5rem',
              },
            }}
          />
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            {isForgetPasswordActive ? '(Reset Password)' : '(Sign in to FMTC)'}
          </Typography>
          <Divider sx={{ my: 3 }}>
            <ArrowDownwardIcon sx={{ color: '#cccccc' }} />
          </Divider>

          {isForgetPasswordActive ? (
            <ForgetPassword toggleForm={toggleForm} />
          ) : (
            <LoginForm toggleForm={toggleForm} />
          )}
        </Card>
      </Stack>
    </Box>
  );
}
