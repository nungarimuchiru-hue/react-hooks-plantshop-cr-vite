import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const PlantCards = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));

  return 
    <ul className="cards">{PlantCards}</ul>;
}

export default PlantList;
