import React, { useContext } from 'react';
import Title from '../components/Title';
import { Button, Grid } from '@mui/material';
import { products } from '../data';
import { Box } from '@mui/system';
import { ShopContext } from '../context/ShoppingContextProvider';
import CartItem from './CartItem';

function Cart() {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);
  return (
    <>
      <Title text="Your Bag" />

      <Box>
        <Grid container sx={{ justifyContent: 'center', display: 'flex' }}>
          {products.map((product, i) => {
            if (cartItems[product.id] !== 0) {
              return (
                <Grid item key={i}>
                  <CartItem props={product} />
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>

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
    </>
  );
}

export default Cart;
