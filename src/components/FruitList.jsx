import React from "react";
import FruitCard from "./FruitCard";

export default function FruitList({ fruits, AddToCart }) {
  if (!fruits.length) return <p>目前沒有商品</p>;

  return (
    <div className="fruit-list">
      {fruits.map((fruit) => (
        <FruitCard key={fruit.id} fruit={fruit} AddToCart={AddToCart} />
      ))}
    </div>
  );
}
