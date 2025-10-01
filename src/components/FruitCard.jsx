import React, { useState } from "react";


export default function FruitCard({ fruit, AddToCart }) {
  const [count,setCount] = useState(1);
  const disabled = fruit.quantity <= 0;

  return (
    <div className="fruit-card">
      <h3>{fruit.name}</h3>
      <p>價格：${fruit.price}</p>
      <p>庫存：{fruit.quantity}</p>

      <div>
        <button
        type="button" onClick={()=> {setCount((c) => Math.max(1,c-1))}}
        disabled={count<=1}>-
        </button>
        <input
        type="number" value={count} min={1} max={fruit.quantity}
        onChange={(e)=>{setCount(Math.min(fruit.quantity,Math.max(1,Number(e.target.value))))}}
        />
        <button
        type="button" onClick={()=> {setCount((c) => Math.min(c+1,fruit.quantity))}}
        disabled={count>=fruit.quantity}>+
        </button>
      </div>
      <button onClick={()=>AddToCart(fruit,count)} disabled={disabled} className="onAdd">
        {disabled ? "已售完" : "加入購物車"}
      </button>


    </div>
  );
}
