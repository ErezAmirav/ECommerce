import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { Typography, Button, ButtonGroup, Input, Divider } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { ShopContext } from '../context/ShoppingContextProvider';
function CartItem({ props, quantity }) {
  const { addToCart, removeFromCart, removeAllFromCart, updateCartItemAmount } =
    useContext(ShopContext);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          boxShadow: '0px 0px 5px',
          background: 'white',
          borderRadius: 1,
          p: 1,
          m: 1,
        }}
      >
        <Box sx={{ justifyContent: 'space-between', display: 'flex' }}>
          <Typography
            sx={{
              fontSize: 14,
              fontFamily: 'Rubik',
              fontWeight: 'bold',
            }}
          >
            {props.brand}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontFamily: 'Rubik',
              fontWeight: 'bold',
            }}
          >
            ${props.price}.00
          </Typography>
        </Box>
        <Divider sx={{ border: 1, borderColor: 'black', mb: 1 }} />
        <img
          src={props.img}
          height={100}
          width={'100%'}
          style={{ objectFit: 'cover' }}
        />
        <Divider sx={{ border: 1, borderColor: 'black', mb: 1, mt: 1 }} />
        <Typography
          sx={{ fontFamily: 'Rubik', fontWeight: 'bold', width: 225 }}
        >
          {props.title}
        </Typography>
        <Box>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ border: 1 }}
          >
            <Button
              onClick={() => removeFromCart(props.id)}
              sx={{
                background: 'black',
                fontFamily: 'Rubik',
                ':hover': {
                  color: 'lime',
                  background: 'black',
                },
              }}
            >
              -
            </Button>
            <Input
              value={quantity}
              onChange={(e) =>
                updateCartItemAmount(Number(e.target.value), props.id)
              }
              sx={{
                fontFamily: 'Rubik',
                fontWeight: 'bold',
                width: 40,
                mt: 0.7,
                textAlign: 'center',
                input: { textAlign: 'center' },
              }}
            />
            <Button
              onClick={() => addToCart(props.id)}
              sx={{
                background: 'black',
                fontFamily: 'Rubik',
                ':hover': {
                  color: 'lime',
                  background: 'black',
                },
              }}
            >
              +
            </Button>
          </ButtonGroup>
        </Box>
        <Button
          onClick={() => removeAllFromCart(props.id)}
          variant="contained"
          sx={{
            background: 'black',
            mt: 0.5,
            fontFamily: 'Rubik',
            ':hover': {
              color: 'lime',
              background: 'black',
            },
          }}
        >
          <RemoveShoppingCartIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default CartItem;
