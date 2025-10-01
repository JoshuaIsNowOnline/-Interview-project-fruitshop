import React from "react";


export default function FruitCard({ fruit, onAdd }) {
  const disabled = fruit.quantity <= 0;

  return (
    <div className="fruit-card">
      <h3>{fruit.name}</h3>
      <p>價格：${fruit.price}</p>
      <p>庫存：{fruit.quantity}</p>
      <button onClick={onAdd} disabled={disabled} className="onAdd">
        {disabled ? "已售完" : "加入購物車"}
      </button>
    </div>
  );
}
