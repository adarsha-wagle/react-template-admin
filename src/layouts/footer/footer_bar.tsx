// eslint-disable-next-line object-curly-newline
import { AppBar, List, ListItem, ListItemText, Typography } from '@mui/material';

import ListItemIcon from '@mui/material/ListItemIcon';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Footer() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'primary' }}
      component="footer"
      className="apply--maxwidth"
    >
      <Typography variant="h5">I am Footer</Typography>
      <List
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          flexDirection: 'column',
        }}
      >
        <ListItem>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="123 Main Street, City" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary="123-456-7890" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary="Our Products" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="info@example.com" />
        </ListItem>
      </List>
    </AppBar>
  );
}
