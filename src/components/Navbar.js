import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
} from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Stack } from '@mui/system';
import { styled } from '@mui/material/styles';
import { ShopContext } from '../context/ShoppingContextProvider';
import { Link } from 'react-router-dom';

function Navbar() {
  const { cartItems, getNumOfCartItems } = useContext(ShopContext);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 18,
      top: 6,
      background: 'lime',
      color: 'black',
      fontFamily: 'Rubik',
    },
  }));

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'black',
        mb: 1,
      }}
    >
      <Toolbar>
        <Link to="/ecommerce" style={{ textDecoration: 'none', color: 'white' }}>
          <IconButton
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
        </Link>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          ECommerce
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link to="/ecommerce" style={{ textDecoration: 'none', color: 'white' }}>
            <Button
              color="inherit"
              sx={{
                fontWeight: 'bold',
                ':hover': {
                  color: 'lime',
                },
              }}
            >
              Home
            </Button>
          </Link>
          <Link
            to="/ecommerce/categories"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Button
              color="inherit"
              sx={{
                fontWeight: 'bold',
                ':hover': {
                  color: 'lime',
                },
              }}
            >
              Products
            </Button>
          </Link>
          <Link
            to="/ecommerce/contact"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Button
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
          </Link>
          <Link to="/ecommerce/about" style={{ textDecoration: 'none', color: 'white' }}>
            <Button
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
          </Link>
          <Link to="/ecommerce/cart" style={{ textDecoration: 'none', color: 'white' }}>
            <StyledBadge badgeContent={getNumOfCartItems(cartItems)}>
              <Button
                color="inherit"
                sx={{
                  fontWeight: 'bold',
                  ':hover': {
                    color: 'lime',
                  },
                }}
              >
                <ShoppingCartIcon />
              </Button>
            </StyledBadge>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
