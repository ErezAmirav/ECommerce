import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import { Button, Grid, Typography } from '@mui/material';
import { products } from '../data';
import { Box } from '@mui/system';
import { ShopContext } from '../context/ShoppingContextProvider';
import CartItem from './CartItem';

function Cart() {
  const { cartItems, getNumOfCartItems, getTotalCartAmount } =
    useContext(ShopContext);
  const [sumPrice, setSumPrice] = useState(0);
  let quantity = 0;
  console.log('This is cartItems from Cart.js:');
  console.log(cartItems);
  return (
    <>
      <Title text="Your Bag" />
      <Typography>Total Items: {getNumOfCartItems(cartItems)}</Typography>
      <Typography>Subtotal: ${getTotalCartAmount()}</Typography>

      <Box>
        <Grid container sx={{ justifyContent: 'center', display: 'flex' }}>
          {products.map((product, i) => {
            console.log(cartItems[product.price]);
            if (cartItems[product.id] !== 0) {
              quantity = cartItems[product.id];
              // setSumPrice(sumPrice + cartItems[product.price]);
              return (
                <Grid item key={i}>
                  <CartItem props={product} quantity={quantity} />
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
