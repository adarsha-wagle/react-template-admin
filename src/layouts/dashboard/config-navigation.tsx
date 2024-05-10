import React from 'react';

import EqualizerIcon from '@mui/icons-material/Equalizer';
import DescriptionIcon from '@mui/icons-material/Description';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const navConfig: NavItem[] = [
  {
    title: 'dashboard',
    path: '/',
    icon: <EqualizerIcon />,
  },
  {
    title: 'Documents',
    path: '/documents',
    icon: <DescriptionIcon />,
  },
  {
    title: 'login',
    path: '/login',
    icon: <LoginIcon />,
  },
  {
    title: 'register',
    path: '/register',
    icon: <AppRegistrationIcon />,
  },
  {
    title: 'Not found',
    path: '/404',
    icon: <ReportProblemIcon />,
  },
];

export default navConfig;