import { FaTimes } from "react-icons/fa";
const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        {task.text}
        <FaTimes style={iconStyle} />{" "}
      </h3>
      <p>{task.day}</p>
    </div>
  );
};
const iconStyle = {
  color: "red",
};

export default Task;
