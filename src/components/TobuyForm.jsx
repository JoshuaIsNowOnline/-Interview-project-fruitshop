import { useState } from "react";

export default function TobuyForm({addBuy}) {
  const [content, setContent] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;
    addBuy(content);
    setContent("");
  }

  return (
    <form className="list-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入採購品項"
        value={content}
        onChange={(e) => setContent(e.target.value)}  
      ></input>
      <button type="submit">加入</button>
    </form>
  );
}
