import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import React from 'react';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        mt: 5,
      }}
      px={{ xs: 2, sm: 7 }}
      py={{ xs: 4, sm: 7 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Help</Box>
            <Box>
              <Link to="/ecommerce/contact" color="inherit" style={{ color: 'white' }}>
                Contact
              </Link>
            </Box>
            <Box>
              <Link to="/ecommerce" color="inherit" style={{ color: 'white' }}>
                Support
              </Link>
            </Box>
            <Box>
              <Link to="/ecommerce" color="inherit" style={{ color: 'white' }}>
                Privacy Policy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Account</Box>
            <Box>
              <Link to="/ecommerce" color="inherit" style={{ color: 'white' }}>
                Login
              </Link>
            </Box>
            <Box>
              <Link to="/ecommerce" color="inherit" style={{ color: 'white' }}>
                Register
              </Link>
            </Box>
            <Box>
              <Link to="/ecommerce" color="inherit" style={{ color: 'white' }}>
                Privacy Policy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Messages</Box>
            <Box>
              <Link to="/ecommerce" color="inherit" style={{ color: 'white' }}>
                Backup
              </Link>
            </Box>
            <Box>
              <Link to="/ecommerce" color="inherit" style={{ color: 'white' }}>
                History
              </Link>
            </Box>
            <Box>
              <Link to="/ecommerce" color="inherit" style={{ color: 'white' }}>
                Roll
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          ECommerce Project &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
