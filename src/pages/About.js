import React from 'react';
import { Box } from '@mui/system';
import Title from '../components/Title';
import { Typography } from '@mui/material';

function About() {
  return (
    <Box
      sx={{
        mt: -1,
        textAlign: 'center',
        justifyContent: 'center',
        background: 'black',
        padding: 2,
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Rubik',
          fontWeight: 'bold',
          color: 'white',
          fontSize: 20,
          mb: 2,
        }}
      >
        About
      </Typography>
      <Typography sx={{ fontFamily: 'Rubik', color: 'white' }}>
        This project was made for practicing ECommerce shop Frontend
        development.
        <br />
        Entire Fronted was created using Material-UI Components.
        <br />
        Created by Erez Amirav.
      </Typography>
    </Box>
  );
}

export default About;
