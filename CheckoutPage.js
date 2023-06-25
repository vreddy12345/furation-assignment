import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../store/actions/orderActions';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handlePlaceOrder = () => {
    dispatch(placeOrder(cartItems));
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Checkout cartItems={cartItems} placeOrder={handlePlaceOrder} />
    </div>
  );
};

export default CheckoutPage;
