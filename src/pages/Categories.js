import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import { categories } from '../data';
import { products } from '../data';
import { Box } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

function Categories() {
  const [brand, setBrand] = useState('showAll');
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    brand === 'showAll'
      ? setProdList(products)
      : setProdList(products.filter((product) => product.brand === brand));
  }, [brand]);

  return (
    <>
      <Title text={'Categories'} />
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'black',
        }}
      >
        {categories.map((item) => (
          <Grid
            item
            sx={{
              border: 2,
              borderRadius: 3,
              margin: 1,
              p: 1,
              cursor: 'pointer',
              background: 'white',
            }}
          >
            <Box>
              <img
                src={item.img}
                width={200}
                onClick={() => setBrand(item.title)}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <Button
          sx={{
            fontFamily: 'Rubik',
            background: 'black',
            borderRadius: 2,
            color: 'white',
            width: 200,
            fontWeight: 'bold',
            mt: 1.5,
            mb: 1,
            ':hover': {
              background: 'black',
              color: 'lime',
            },
          }}
          onClick={() => setBrand('showAll')}
        >
          Show all
        </Button>
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        {prodList.map((item) => (
          <Grid
            item
            sx={{
              boxShadow: '0px 0px 5px',
              background: 'white',
              // border: 2,
              borderRadius: 3,
              p: 1,
              m: 1,
            }}
          >
            <Typography sx={{ fontWeight: 'bold', width: 225 }}>
              {item.title}
            </Typography>
            <img
              src={item.img}
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
            />
            <div style={{ padding: 3 }}>{`$${item.price}.00`}</div>
            <Button
              variant="contained"
              sx={{
                background: 'black',
                ':hover': {
                  color: 'lime',
                  background: 'black',
                },
              }}
            >
              <AddShoppingCartIcon />
            </Button>
            <Button
              variant="contained"
              sx={{
                background: 'black',
                ml: 1,
                ':hover': {
                  color: 'lime',
                  background: 'black',
                },
              }}
            >
              <ReadMoreIcon />
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Categories;
