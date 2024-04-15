import React from 'react';

function Cart() {
  return (
    <div className="cart">
      <img src="cart-icon.png" alt="Cart" />
      {/* Add cart functionality here */}
      <h3>Shopping Cart</h3>
      <ul>
        {/* Display list of items in the cart */}
        <li>Item 1</li>
        <li>Item 2</li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
}

export default Cart;

