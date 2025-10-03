import { useState } from "react";
import Tobuy from "./Tobuy";
import TobuyForm from "./TobuyForm";

export default function TobuyWrapper() {
  const [tobuys, setTobuys] = useState([
  ]);

  const addBuy = (content) => {
    setTobuys([
      ...tobuys,
      {
        content: content,
        id: Math.random(),
        isComplete: false,
        isEdited: false,
      },
    ]);
  };

  const deleteBuy = (id) => {
    setTobuys(tobuys.filter((tobuy) => tobuy.id !== id));
  };

  const toggleComplete = (id) => {
    setTobuys(
      tobuys.map((tobuy) => {
        if (tobuy.id === id) {
          return { ...tobuy, isComplete: !tobuy.isComplete };
        }
        return tobuy;
      })
    );
  };

  const toggleIdEdited = (id) => {
    setTobuys(
      tobuys.map((tobuy) => {
        if (tobuy.id === id) {
          return { ...tobuy, isEdited: !tobuy.isEdited };
        }
        return tobuy;
      })
    );
  };

  const editBuy = (id, content) => {
    setTobuys(
      tobuys.map((tobuy) => {
        if (tobuy.id === id) {
          return { ...tobuy, content: content, isEdited: false };
        }
        return tobuy;
      })
    );
  };

  return (
    <div className="wrapper">
      <h1>採買清單</h1>
      <TobuyForm addBuy={addBuy} />
      {tobuys.map((tobuy) => {
        return (
          <Tobuy
            editBuy={editBuy}
            toggleIdEdited={toggleIdEdited}
            toggleComplete={toggleComplete}
            tobuy={tobuy}
            key={tobuy.id}
            deleteBuy={deleteBuy}
          />
        );
      })}
    </div>
  );
}
