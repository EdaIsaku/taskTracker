import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onDoubleClick }) => {
  return (
    <div
      className={`task ${task.remainder === true ? " remainder " : " "}`}
      onDoubleClick={() => onDoubleClick(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes style={iconStyle} onClick={() => onDelete(task.id)} />{" "}
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

const iconStyle = {
  color: "red",
};

export default Task;
