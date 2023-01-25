import React, { useState, useEffect, useContext } from 'react';
import Title from '../components/Title';
import { categories } from '../data';
import { products } from '../data';
import { Box } from '@mui/system';
import { Button, Divider, Grid, Tooltip, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import CloseIcon from '@mui/icons-material/Close';
import { ShopContext } from '../context/ShoppingContextProvider';

function Categories() {
  const [brand, setBrand] = useState('showAll');
  const [prodList, setProdList] = useState([]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [chosenProduct, setChosenProduct] = useState(0);
  const { addToCart, cartItems } = useContext(ShopContext);

  useEffect(() => {
    brand === 'showAll'
      ? setProdList(products)
      : setProdList(products.filter((product) => product.brand === brand));
  }, [brand]);

  const handleClickOpen = () => {
    setOpenPopUp(!openPopUp);
  };
  const closePopup = () => {
    setOpenPopUp(false);
  };

  let cartItemAmount = null;

  console.log(cartItems);
  return (
    <>
      <Grid
        container
        sx={{
          mt: -1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'black',
        }}
      >
        {categories.map((item, i) => (
          <Grid
            item
            key={i}
            sx={{
              border: 2,
              borderRadius: 3,
              margin: 1,
              p: 1,
              cursor: 'pointer',
              background: 'white',
            }}
          >
            <Box
              sx={{
                transition: '0.5s all ease-in-out',
                ':hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
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
        {prodList.map((item, i) => (
          <Grid
            item
            key={i}
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
                {item.brand}
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: 'Rubik',
                  fontWeight: 'bold',
                }}
              >
                ${item.price}.00
              </Typography>
            </Box>
            <Divider sx={{ border: 1, borderColor: 'black', mb: 1 }} />
            <img
              src={item.img}
              width={'100%'}
              height={100}
              style={{ objectFit: 'cover' }}
            />
            <Divider sx={{ border: 1, borderColor: 'black', mb: 1, mt: 1 }} />
            <Typography
              align="left"
              sx={{
                fontFamily: 'Rubik',
                fontWeight: 'bold',
                width: 225,
                fontSize: 15,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Rubik',
                fontSize: 11,
                width: 225,
                mb: 1,
                textAlign: 'left',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {item.desc}
            </Typography>
            <Divider sx={{ border: 1, borderColor: 'black', mb: 1, mt: 1 }} />
            <Tooltip title="Add To Cart">
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
                onClick={() => addToCart(item.id)}
              >
                <AddShoppingCartIcon />
                {
                  (cartItemAmount = cartItems[item.id] > 0 && (
                    <> ({(cartItemAmount = cartItems[item.id])}) </>
                  ))
                }
              </Button>
            </Tooltip>
            <Tooltip title="Full Information">
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
                onClick={() => {
                  handleClickOpen();
                  setChosenProduct(item.id);
                }}
              >
                <ReadMoreIcon /> {}
              </Button>
            </Tooltip>
          </Grid>
        ))}
        <Box>
          {openPopUp ? (
            <Box
              sx={{
                backgroundColor: 'rgba(128, 128, 128,0.710)',
                height: '100vh',
                width: '100vw',
                position: 'fixed',
                top: 0,
                left: 0,
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  boxShadow: '0px 0px 3px',
                  backgroundColor: 'white',
                  position: 'absolute',
                  top: '25%',
                  right: '25%',
                  borderRadius: 3,
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0 30px 0 15px',
                    borderBottom: '2px solid black',
                  }}
                >
                  <Title
                    text={
                      products.find((product) => product.id === chosenProduct)
                        .title
                    }
                  />
                  <CloseIcon
                    sx={{
                      mt: 2.5,
                      cursor: 'pointer',
                      color: 'white',
                      background: 'black',
                      borderRadius: 10,
                    }}
                    onClick={closePopup}
                  />
                </Box>
                <Box>
                  <p style={{ textAlign: 'left' }}>
                    {
                      products.find((product) => product.id === chosenProduct)
                        .desc
                    }
                  </p>
                  <img
                    style={{
                      width: 200,
                      height: 200,
                      objectFit: 'cover',
                      borderRadius: 8,
                    }}
                    src={
                      products.find((product) => product.id === chosenProduct)
                        .img
                    }
                  />
                  <p>
                    Price: ${' '}
                    {
                      products.find((product) => product.id === chosenProduct)
                        .price
                    }
                    .00
                  </p>
                  <Tooltip title="Go Back">
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
                      onClick={closePopup}
                    >
                      Back
                    </Button>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          ) : (
            ''
          )}
        </Box>
      </Grid>
    </>
  );
}

export default Categories;
