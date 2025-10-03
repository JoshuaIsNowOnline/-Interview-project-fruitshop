import { useState, useEffect } from "react";
import Tobuy from "./Tobuy";
import TobuyForm from "./TobuyForm";

export default function TobuyWrapper() {
  // 初始化時直接從 localStorage 載入數據
  const [tobuys, setTobuys] = useState(() => {
    const savedTobuys = localStorage.getItem('tobuys');
    if (savedTobuys) {
      try {
        return JSON.parse(savedTobuys);
      } catch (err) {
        console.error('Error parsing saved tobuys:', err);
        return [];
      }
    }
    return [];
  });

  // 保存數據到 localStorage
  useEffect(() => {
    localStorage.setItem('tobuys', JSON.stringify(tobuys));
  }, [tobuys]);

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
      {tobuys.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📝</div>
          <div className="empty-state-text">還沒有任何採購項目</div>
          <div className="empty-state-subtext">開始添加您需要採購的物品吧！</div>
        </div>
      ) : (
        tobuys.map((tobuy) => {
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
        })
      )}
    </div>
  );
}
