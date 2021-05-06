import Task from "./Task";
const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={Math.random()} task={task} />
      ))}
    </>
  );
};

export default Tasks;
