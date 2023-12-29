import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = React.useState(TASKS);

  function handleRemoveTask(index){
    console.log("i was called with " + index)
    setTasks(
      tasks.slice(0, index).concat(tasks.slice(index + 1)) 
    )
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} onRemoveTask={handleRemoveTask}/>
    </div>
  );
}

export default App;
