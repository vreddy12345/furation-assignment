import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/actions/cartActions';
import ShoppingCart from '../components/ShoppingCart';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ShoppingCart cartItems={cartItems} removeFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default ShoppingCartPage;
