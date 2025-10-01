import React from "react";
import { MdDelete } from "react-icons/md";

export default function Cart({ items = [], onRemove }) {
  const total = items.reduce(
    (s, it) => s + (it.price || 0) * (it.quantity || 0),
    0
  );

  return (
    <div className="cart">
      <h2>購物車</h2>
      {items.length === 0 ? (
        <p>購物車是空的</p>
      ) : (
        <ul className="cart-list">
          {items.map((it) => (
            <li key={it.fruitId ?? it.cartId} className="cart-item">
              <div>
                {it.name} x {it.quantity} = ${it.price * it.quantity}
              </div>
              <MdDelete onClick={() => onRemove(it.fruitId ?? it.cartId)} 
              className="remove"/>
            </li>
          ))}
        </ul>
      )}
      <div className="total">總計：${total}</div>
    </div>
  );
}
