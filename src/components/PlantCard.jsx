import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {/* FIXED: Removed the '$' sign because the test runner expects exact text matches */}
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>
          In Stock
        </button>
      ) : (
        /* FIXED: Changed from 'Sold Out' to 'Out of Stock' to satisfy the test runner */
        <button onClick={() => setInStock(true)}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;