import React from 'react';
import { Box } from '@mui/system';
import { Typography, Button, ButtonGroup, TextField } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
function CartItem({ props }) {
  console.log(props);
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
          borderRadius: 3,
          p: 1,
          m: 1,
        }}
      >
        <Typography
          sx={{ fontFamily: 'Rubik', fontWeight: 'bold', width: 225 }}
        >
          {props.title}
        </Typography>
        <img src={props.img} height={100} />
        <p>Price: ${props.price}</p>
        <Box>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ border: 1 }}
          >
            <Button
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
            <Typography
              sx={{
                fontFamily: 'Rubik',
                fontWeight: 'bold',
                width: 40,
                mt: 0.7,
              }}
            >
              0
            </Typography>
            <Button
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
