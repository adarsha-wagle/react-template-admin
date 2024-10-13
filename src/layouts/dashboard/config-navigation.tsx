import React from 'react';

import EqualizerIcon from '@mui/icons-material/Equalizer';
import LoginIcon from '@mui/icons-material/Login';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ContactsIcon from '@mui/icons-material/Contacts';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export const navConfig: NavItem[] = [
  {
    title: 'dashboard',
    path: '/',
    icon: <EqualizerIcon />,
  },
  {
    title: 'Bookings',
    path: '/booking',
    icon: <BookmarksIcon />,
  },
  {
    title: 'Contacts',
    path: '/contact',
    icon: <ContactsIcon />,
  },
  {
    title: 'login',
    path: '/login',
    icon: <LoginIcon />,
  },

  {
    title: 'Not found',
    path: '/404',
    icon: <ReportProblemIcon />,
  },
];
