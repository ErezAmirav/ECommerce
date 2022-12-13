import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Stack } from '@mui/system';

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'black',
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
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          ECommerce
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            href="/"
            color="inherit"
            sx={{
              fontWeight: 'bold',
              ':hover': {
                color: 'lime',
              },
            }}
          >
            Shop
          </Button>
          <Button
            href="/categories"
            color="inherit"
            sx={{
              fontWeight: 'bold',
              ':hover': {
                color: 'lime',
              },
            }}
          >
            Categories
          </Button>
          <Button
            href="/contact"
            color="inherit"
            sx={{
              fontWeight: 'bold',
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
              fontWeight: 'bold',
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
              fontWeight: 'bold',
              ':hover': {
                color: 'lime',
              },
            }}
          >
            <ShoppingCartIcon sx={{ mr: 2 }} />
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
