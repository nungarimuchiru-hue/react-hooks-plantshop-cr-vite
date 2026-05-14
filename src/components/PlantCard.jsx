import { Buttons } from "@testing-library/user-event/dist/cjs/system/pointer/buttons.js";
import React from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(plant.inStock);

  function handlestockToggle() {
    setInStock(!inStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      {inStock ? (
        <Button className="primary" onClick={handlestockToggle}>
          In Stock
        </Button>
      ) : (
        <button onClick={handlestockToggle}>Out of stock</button>
      )}
      </li>
  );
}

export default PlantCard;
