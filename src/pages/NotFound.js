import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <>
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
        <Typography sx={{ fontFamily: 'Rubik', color: 'white', fontSize: 60 }}>
          Error 404: <br />
          Page Not Found
        </Typography>
        <Typography sx={{ fontFamily: 'Rubik', color: 'white', fontSize: 100 }}>
          You Lost?
        </Typography>
        <Link to="/ecommerce">
          <Button
            variant="contained"
            sx={{
              background: 'black',
              fontFamily: 'Rubik',
              mt: 6,
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
            Back to safety
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default NotFound;
