import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Stack } from '@mui/system';

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        // background: 'linear-gradient(25deg, #0a1e80,#a72ca8)',
        mb: 1,
      }}
    >
      <Toolbar>
        <IconButton
          href="/"
          size="large"
          edge="start"
          color="inherit"
          sx={{
            ':hover': {
              color: 'lime',
            },
          }}
        >
          <StoreIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontFamily: 'Rubik' }}
        >
          ECommerce
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            href="/"
            color="inherit"
            sx={{
              fontFamily: 'Rubik',
              ':hover': {
                color: 'lime',
              },
            }}
          >
            Home
          </Button>
          <Button
            href="/contact"
            color="inherit"
            sx={{
              fontFamily: 'Rubik',
              ':hover': {
                color: 'lime',
              },
            }}
          >
            Contact
          </Button>
          <Button
            href="/about"
            color="inherit"
            sx={{
              fontFamily: 'Rubik',
              ':hover': {
                color: 'lime',
              },
            }}
          >
            About
          </Button>
          <Button
            href="/cart"
            color="inherit"
            sx={{
              fontFamily: 'Rubik',
              ':hover': {
                color: 'lime',
              },
            }}
          >
            <ShoppingCartIcon sx={{mr: 1}}/>
            Cart
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
