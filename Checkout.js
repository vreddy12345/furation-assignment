import React from 'react';

const Checkout = ({ cartItems, placeOrder }) => {
  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
              </li>
            ))}
          </ul>
          <button onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
