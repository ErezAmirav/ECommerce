import React from 'react';
import Title from '../components/Title';
function CartItem({ props }) {
  const { id, img, title, brand, price, desc } = props.data;
  return (
    <>
      <Title text={title} />
      <img src={img}/>
    </>
  );
}

export default CartItem;
