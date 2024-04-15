import React from 'react';

function Menu() {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="category">
        <h3>Indian Style</h3>
        <ul>
          <li>Butter Chicken</li>
          <li>Tandoori Tikka</li>
          <li>Thali</li>
          {/* Add more Indian style items */}
        </ul>
      </div>
      <div className="category">
        <h3>Salad</h3>
        <ul>
          <li>Greek Salad</li>
          <li>Caesar Salad</li>
          {/* Add more salad items */}
        </ul>
      </div>
      {/* Add more categories */}
    </div>
  );
}

export default Menu;

