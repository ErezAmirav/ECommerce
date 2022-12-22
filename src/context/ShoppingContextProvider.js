import React, { createContext, useState } from 'react';
import { products } from '../data';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShoppingContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getNumOfCartItems = (cartItems) => {
    let items = 0;
    for (let i = 1; i < products.length + 1; i++)
      if (cartItems[i] !== 0) items += cartItems[i];
    return items;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getNumOfCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
