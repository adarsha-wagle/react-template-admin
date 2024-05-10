import React from 'react';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

interface NavItem {
  id: number;
  name: string;
  to: string;
}
const navItems: NavItem[] = [
  {
    id: 1,
    name: 'Home',
    to: '/',
  },
  {
    id: 2,
    name: 'About',
    to: '/about',
  },
  {
    id: 3,
    name: 'Service',
    to: '/service',
  },
];

function NavItems() {
  return (
    <>
      {navItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <Link to={item?.to}>{item?.name}</Link>
        </ListItem>
      ))}
    </>
  );
}

export default React.memo(NavItems);
