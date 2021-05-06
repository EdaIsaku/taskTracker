import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "first", day: "1/05/2021" },
    { id: 2, text: "second", day: "1/05/2021" },
    { id: 3, text: "third", day: "1/05/2021" },
  ]);

  //Delete task
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={onDelete} />
    </div>
  );
}

export default App;
