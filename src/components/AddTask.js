import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remainder, setRemainder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      onAdd({ text, day, remainder });
    }
    //clear state
    setText("");
    setDay("");
    setRemainder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label for="">Add Task</label>
        <input
          type="text"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label for="">Add Date and Time</label>
        <input
          type="text"
          placeholder="Add date and time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control  form-control-check">
        <label for="">Set reminder</label>
        <input
          type="checkbox"
          onChange={(e) => setRemainder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
