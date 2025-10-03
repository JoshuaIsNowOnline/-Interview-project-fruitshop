import { MdOutlineDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import Editform from "./EditForm";
export default function Tobuy({
  tobuy,
  deleteBuy,
  toggleComplete,
  toggleIdEdited,
  editBuy,
}) {
  return tobuy.isEdited ? (
    <div className="tobuy-item">
      <Editform tobuy={tobuy} editBuy={editBuy} toggleIdEdited={toggleIdEdited} />
    </div>
  ) : (
    <div className={`tobuy-item ${tobuy.isComplete ? "completed" : ""}`}>
      <div className="tobuy-content">
        <div className="tobuy-text">
          <div 
            className={`tobuy-checkbox ${tobuy.isComplete ? "checked" : ""}`}
            onClick={() => toggleComplete(tobuy.id)}
          />
          <span 
            className={`tobuy-label ${tobuy.isComplete ? "completed" : ""}`}
            onClick={() => toggleComplete(tobuy.id)}
          >
            {tobuy.content}
          </span>
        </div>
        <div className="tobuy-actions">
          <button 
            className="edit-btn"
            onClick={() => toggleIdEdited(tobuy.id)}
          >
            <FiEdit2 /> 編輯
          </button>
          <button 
            className="delete-btn"
            onClick={() => deleteBuy(tobuy.id)}
          >
            <MdOutlineDelete /> 刪除
          </button>
        </div>
      </div>
    </div>
  );
}
