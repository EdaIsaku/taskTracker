import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random());
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete task
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const onDoubleClick = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: !task.remainder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={onDelete}
          onDoubleClick={onDoubleClick}
        />
      ) : (
        "No tasks"
      )}
    </div>
  );
}

export default App;
