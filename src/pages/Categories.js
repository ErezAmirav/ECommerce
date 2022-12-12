import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import { categories } from '../data';
import { products } from '../data';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Categories() {
  const [brand, setBrand] = useState('');
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    setProdList(products.filter((product) => product.brand === brand));
  }, [brand]);

  return (
    <>
      <Title text={'Categories'} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'black',
        }}
      >
        {categories.map((item) => (
          <Box
            sx={{
              border: 2,
              borderRadius: 3,
              margin: 1,
              p: 1,
              cursor: 'pointer',
              background: 'white',
            }}
          >
            <img
              src={item.img}
              width={200}
              onClick={() => setBrand(item.title)}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {prodList.map((item) => (
          <Box
            sx={{
              border: 2,
              borderRadius: 3,
              p: 1,
              m: 1,
            }}
          >
            {item.title}
            <br />
            <img
              src={item.img}
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
            />
            <br />
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
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Categories;
