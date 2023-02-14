import { Typography, Box, Button } from '@mui/material';
import React from 'react';
import Title from '../components/Title';
import backG from '../assets/img/backG.png';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${backG})`,
          backgroundSize: 'cover',
          height: 600,
          mt: -1,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Rubik',
            textTransform: 'uppercase',
            fontSize: 50,
            textAlign: 'left',
            color: 'white',
            ml: 2,
            textShadow:'2px 2px 3px black'
          }}
        >
          Discover Limited Sneakers
          <br />
          Without Limitations
        </Typography>
        <Link to="/ecommerce/categories">
          <Button
            variant="contained"
            sx={{
              background: 'black',
              float: 'left',
              ml: 12,
              mt: 15,
              fontFamily: 'Rubik',
              height: 70,
              width: 220,
              border: 2,
              borderColor: 'white',
              fontSize: 30,
              fontWeight: 'bold',
              ':hover': {
                color: 'lime',
                background: 'black',
                borderColor: 'lime',
              },
            }}
          >
            Shop Now
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default HomePage;
