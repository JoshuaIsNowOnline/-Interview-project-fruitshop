import React from "react";
import FruitCard from "./FruitCard";

export default function FruitList({ fruits = [], onAddToCart }) {
  if (!fruits.length) return <p>目前沒有商品</p>;

  return (
    <div className="fruit-list">
      {fruits.map((f) => (
        <FruitCard key={f.id} fruit={f} onAdd={() => onAddToCart(f)} />
      ))}
    </div>
  );
}
