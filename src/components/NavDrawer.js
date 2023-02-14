import React, { useState, useContext } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Button,
  Badge,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import { ShopContext } from '../context/ShoppingContextProvider';

const NavDrawer = () => {
  const { cartItems, getNumOfCartItems } = useContext(ShopContext);
  const [open, setOpen] = useState(false);
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
    <>
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
      <Drawer
        anchor="right"
        PaperProps={{
          sx: {
            backgroundColor: 'black',
            boxShadow: '1px 0px 1px 2px white',
            height: 'auto',
            width: '10rem',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          <Link
            to="/ecommerce/"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <ListItemButton onClick={() => setOpen(false)}>
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
            </ListItemButton>
          </Link>
          <Link
            to="/ecommerce/categories"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <ListItemButton onClick={() => setOpen(false)}>
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
            </ListItemButton>
          </Link>
          <Link
            to="/ecommerce/contact"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <ListItemButton onClick={() => setOpen(false)}>
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
            </ListItemButton>
          </Link>
          <Link
            to="/ecommerce/about"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <ListItemButton onClick={() => setOpen(false)}>
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
            </ListItemButton>
          </Link>
          <Link
            to="/ecommerce/cart"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <ListItemButton onClick={() => setOpen(false)}>
              <Button
                color="inherit"
                sx={{
                  fontWeight: 'bold',
                  ':hover': {
                    color: 'lime',
                  },
                }}
              >
                Cart
              </Button>
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon
          sx={{
            color: 'white',
            ':hover': {
              color: 'lime',
            },
          }}
        />
      </IconButton>
    </>
  );
};

export default NavDrawer;
