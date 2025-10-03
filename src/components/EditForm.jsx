import { useState } from "react";

export default function Editform({ tobuy, editBuy }) {
  const [content, setContent] = useState(tobuy.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;
    editBuy(tobuy.id, content);
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入採購品項"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <button type="submit">完成</button>
    </form>
  );
}
