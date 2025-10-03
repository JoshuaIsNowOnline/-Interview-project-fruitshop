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
    <Editform tobuy={tobuy} editBuy={editBuy} />
  ) : (
    <div className={tobuy.isComplete ? "tobuy completed" : "tobuy"}>
      <p onClick={() => toggleComplete(tobuy.id)}>{tobuy.content}</p>
      <div>
        <FiEdit2
          onClick={() => toggleIdEdited(tobuy.id)}
          style={{ cursor: "pointer" }}
        />
        <MdOutlineDelete
          onClick={() => deleteBuy(tobuy.id)}
          style={{ cursor: "pointer", marginLeft: "8px" }}
        />
      </div>
    </div>
  );
}
