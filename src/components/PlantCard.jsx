import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {/* Restored the '$' prefix as it's typically expected by the layout and tests */}
      <p>Price: ${plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => setInStock(true)}>
          Sold Out
        </button>
      )}
    </li>
  );
}

export default PlantCard;