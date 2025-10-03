import { useState } from "react";

export default function Editform({ tobuy, editBuy, toggleIdEdited }) {
  const [content, setContent] = useState(tobuy.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    editBuy(tobuy.id, content);
  };

  const handleCancel = () => {
    toggleIdEdited(tobuy.id);
  };

  return (
    <div className="tobuy-content">
      <form className="edit-form" onSubmit={handleSubmit}>
        <input
          className="edit-input"
          type="text"
          placeholder="輸入採購品項"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          autoFocus
        />
        <button className="save-btn" type="submit">
          儲存
        </button>
        <button 
          className="cancel-btn" 
          type="button" 
          onClick={handleCancel}
        >
          取消
        </button>
      </form>
    </div>
  );
}
