import React, { useContext } from 'react';
import Title from '../components/Title';
import { Button, Grid, Typography } from '@mui/material';
import { products } from '../data';
import { Box } from '@mui/system';
import { ShopContext } from '../context/ShoppingContextProvider';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, getNumOfCartItems, getTotalCartAmount } =
    useContext(ShopContext);
  let quantity = 0;
  return (
    <>
      <Title text="Your Bag" />

      <Box sx={{ mb: 3 }}>
        <Grid container sx={{ justifyContent: 'center', display: 'flex' }}>
          {products.map((product, i) => {
            if (cartItems[product.id] !== 0) {
              quantity = cartItems[product.id];
              return (
                <Grid item key={i}>
                  <CartItem props={product} quantity={quantity} />
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
      <Typography sx={{ fontFamily: 'Rubik', fontWeight: 'bold', mb: 2 }}>
        Cart Items: {getNumOfCartItems(cartItems)}
        <br />
        Subtotal: ${getTotalCartAmount()}
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: 'black',
          fontFamily: 'Rubik',
          ':hover': {
            color: 'lime',
            background: 'black',
          },
        }}
      >
        Checkout Now
      </Button>
      <Link to="/categories">
        <Button
          variant="contained"
          sx={{
            background: 'black',
            fontFamily: 'Rubik',
            ml: 1,
            ':hover': {
              color: 'lime',
              background: 'black',
            },
          }}
        >
          Continue Shopping
        </Button>
      </Link>
    </>
  );
}

export default Cart;
